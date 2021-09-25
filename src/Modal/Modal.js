import React from "react";
import "./Modal.css";
import {
   Router,Link,
    useHistory
} from "react-router-dom";
import Modal1 from "./Modal1";

function Modal({ closeModal }) {
  let history = useHistory();
  console.log(history);
   

  return (
    <div className="modalBackground">

      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="x"
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1> Contact Agreement</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope  nem quos necessitatibus.  qui consequuntur. lorem323 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, placeat. Dolorem eligendi nihil error? Rerum consectetur quisquam laborum fuga quas placeat vel corporis fugiat nam maxime! Odio tempore quasi, rem harum possimus inventore distinctio error commodi explicabo, nesciunt libero, cumque temporibus fugiat autem quod soluta voluptate blanditiis nostrum saepe porro reiciendis dicta iure itaque ducimus. Accusantium quidem fugiat magni fugit voluptatibus iure, aliquam aspernatur cum. Enim, repudiandae. <div><br /></div> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora amet nemo laborum dolorem minus culpa numquam blanditiis illum distinctio neque temporibus ea repudiandae, natus, ipsa aliquid, fugit cum minima harum sunt qui! Illo!</p>
        </div>
        <div className="link"><a className="link" href="#">Learn more</a></div>
        <div className="footer">
          <button
            onClick={() => {history.push("/mahilex")
          
            }}
             
            id="cancelBtn"
          >
            DECLINE
          </button>
          <button>ACCEPT</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;