
import "./app.css";
import Home from "./pages/Home";

import Login from "./pages/Login";
import { BrowserRouter, Routes, Route, Navigate, resolvePath } from "react-router-dom";
import { useEffect, useState } from "react";

import WaitingList from "./pages/WaitingList";
import SubscribedList from "./pages/SubscribedList";


const baseUrl=require("./config/default")

const App = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const getUser = () => {
      fetch(`${baseUrl}/login/success`, {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }).then((resObject) => {
        
         if(resObject.ok===false){
          setUser(false);
         }else{
          setUser(true);
         }
        
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <div>
       
        <Routes>
          <Route path="/" element={ !user ? <Login/> : <Navigate to="/home"/> } />
          <Route
            path="/home"
            element={ user ? <Home/> : <Navigate to="/"/>}
          />
          <Route path="/waitinguser" element={user ? <WaitingList/> : <Navigate to="/" /> }/>
          <Route path="/subscribedlist" element={user ? <SubscribedList/> : <Navigate to="/" />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
