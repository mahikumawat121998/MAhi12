 
import { useState } from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Mahi from './Modal/Mahi';
 
 
import {
  BrowserRouter as Router ,Route
} from "react-router-dom";
import Modal1 from './Modal/Modal1';



const  App=()=> {
 

  const [openModal, setOpenModal] =useState(false)
  return (<>
    
  <div>
    <button onClick={()=>{setOpenModal(true);}}>click Me</button>
    {openModal && <Modal closeModal={setOpenModal}/>}
  </div>
  <Router>
     
    <Route to="/mahilex" exact component={Modal1} />
  
  </Router> 
    
 </> );
}

export default App;
