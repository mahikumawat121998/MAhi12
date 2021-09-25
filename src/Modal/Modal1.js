import React,{useState} from 'react'
import "./Modal1.css";

import { BrowserRouter as Router ,NavLink,Link, Route , Switch,useHistory} from "react-router-dom"
 
 

function Modal1({  closeModal }) {
   
  
    return(<>
     
  
    <div className="modalBackground">
       
     
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
               closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="entire"> 
        <div className="title">
          <h1> Contact agreement</h1>
        </div>
        <div className="body">
          <p>  If you cancel, you will miss out on porch Home Assistant Free concierge moving services and four coupons for handyman services worth $100. Do you wish to accept the terms? </p>
           
        </div>
        </div>

        <div className="footer1" >
          <button className="btn"
            onClick={()=>{ closeModal(false)}}
            id="cancelBtn"
          >
            DECLINE
          </button>
          <button className="btn">ACCEPT</button>
        </div>
      </div>
    </div>
 </> );
}

export default Modal1;