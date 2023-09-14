
import Header from "../components/Header"
import Menubar from "../components/Menubar"

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from "../config/default";



const WaitingList = (props) => {

    const [waitingusers,setWaitingusers]=useState([]);
    const findwaitingsubscriptions=async()=>{
      const result=await axios.get(`${baseUrl}/getWatingusers`);
      setWaitingusers(result.data);
      console.log(result.data);
    }   

    useEffect(()=>{
          
        findwaitingsubscriptions();
       },[])
  
       
       const allowsubscription=async(chatId)=>{
        
        try{
            const result =await axios.put(`${baseUrl}/allowsubscription/${chatId}`);
            findwaitingsubscriptions();
        }catch(err){
            console.log(err);
        }
       }

       const deleteRequest=async(chatId)=>{
        try{
            const result =await axios.delete(`${baseUrl}/deleterequest/${chatId}`);
            setWaitingusers(result.data);
            
        }catch(err){
            
        }
       }
   


    return(
        <>
       <Header userName={props.user} role={props.role} />
            <Menubar />
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Waiting users for Subscibtion</h1>
                </div>
                <section class="section">
                
      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Subscribe them here</h5>
             


              <table class="table">
                <thead>
                  <tr>
                   
                    <th scope="col">User Chat Id</th>
                    <th scope="col">User First Name</th>
                    <th scope="col">User Last Name</th>
                    <th scope="col">update</th>

                  </tr>
                </thead>
                <tbody>
                  {waitingusers.map((waitinguser)=>{
                    return <tr>
                    <th scope="row">{waitinguser.chatId}</th>
                    <td>{waitinguser.firstName}</td>
                    <td>{waitinguser.lastName}</td>
                      <td><a className="icon" href="#" data-bs-toggle="dropdown"><a href="" title="Edit Booking">&#9998;</a></a>
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li><a onClick={()=>allowsubscription(waitinguser.chatId)} className="dropdown-item">Allow Subscription</a></li>
                          <li><a onClick={()=>deleteRequest(waitinguser.chatId)} className="dropdown-item" >Delete Request</a></li>
                          
                        </ul></td>
                    </tr>
                  })}
                </tbody>
              </table>

            </div>
          </div>

        </div>
      </div>
    </section>
   
   </main>


            </>
            
            )
 }

export default WaitingList;
