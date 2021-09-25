import React,{useState} from 'react'
 import Modal1 from './Modal1';
 import Modal from './Modal';

const Mahilex = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>
      <Modal/>

      {modalOpen && <Modal1 setOpenModal={setModalOpen} />}
    </div>
        </div>
    )
}

export default Mahilex
