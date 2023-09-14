
import Header from "../components/Header"
import Menubar from "../components/Menubar"

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import baseUrl from "../config/default";

const SubscribedList = (props) => {
    
    const [subscribedUsers,setSubscribedUsers]=useState([]);


    useEffect(()=>{
        const findSubscribers=async()=>{
          const result=await axios.get(`${baseUrl}/getSubscribedUsers`);
          setSubscribedUsers(result.data);
         
        }      
        findSubscribers();
       },[])


    const deleteRequest=async(chatId)=>{
        try{
            const result =await axios.delete(`${baseUrl}/deleterequest/${chatId}`);
            setSubscribedUsers(result.data);
          
        }catch(err){
            
        }
    }   


    return (
       <>
        <Header  userName={props.user} role={props.role}/>
        <Menubar/>


        <main id="main" className="main">

<div className="pagetitle">
    <h1>Subscribed Users</h1>
</div>
<section class="section">

<div class="row">
<div class="col-lg-12">
<div class="card">
<div class="card-body">
<h5 class="card-title">Manage them here</h5>



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
  {subscribedUsers.map((subscribedUser)=>{
    return <tr>
    <th scope="row">{subscribedUser.chatId}</th>
    <td>{subscribedUser.firstName}</td>
    <td>{subscribedUser.lastName}</td>
      <td><a className="icon" href="#" data-bs-toggle="dropdown"><a href="" title="Edit Booking">&#9998;</a></a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <li><a onClick={()=>deleteRequest(subscribedUser.chatId)} className="dropdown-item" >Delete User</a></li>
          
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

export default SubscribedList;
