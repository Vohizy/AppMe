import React from "react";
import { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";

export const Login=()=>{
  const [lastName,SetLastaName]= useState("");
  const [firstName,SetFirstName]= useState("");
  const navigate=useNavigate()
    return<>
    <div className="App">
      <div className="container-login">
        <div className="col"style={{marginTop:50}}>
          <input type="text" className="form-control" placeholder="First name" aria-label="First name" value={firstName} onChange={e=>SetFirstName(e.target.value)}></input>
        </div>
        <div className="col" style={{marginTop:10}}>
          <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" value={lastName} onChange={e=>SetLastaName(e.target.value)}></input>
        </div>
        <button type="submit" className="btn" onClick={()=>{
      
          if(firstName.toLowerCase()=="rasoanomenjanahary" && lastName.toLowerCase()=="heriniriana marie anicet"){
            console.log("tafiditra ato @if "+firstName.toLowerCase(),lastName.toLowerCase());
             return navigate("/home")
            }

          }}>valider</button>
      </div>
    </div>
    </>
}