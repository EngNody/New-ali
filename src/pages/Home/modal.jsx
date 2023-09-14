


import React from 'react';
import ReactLoading from 'react-loading';
import Modal from '../../shared/Modal';



const TaskModal = ({closemodal ,titleInput ,detailsInput 
  ,addbtn ,submitBtn ,spinloading, array,subtask, subtitle }) => {

  return (
     
    <Modal closemodal={closemodal} >

    <div className="dadmodal">
        <input type="text" placeholder="Add title" typeof="email"
                value={subtitle}
        onChange={(eo) => {titleInput(eo)}}
        />
      <div>
          <input type="text"
          onChange={(eo) => {detailsInput(eo)}}
           placeholder="Details" typeof="text" value={subtask}/>
    
          <button className="add"  onClick={(eo) =>{
          addbtn(eo)
        } }>Add</button>
          
      </div>
    
    
      <ul className="newtask">
      { array.map((item) => (<li key={item}>{item}</li>))}
      </ul>
    
    
        <button className="submit" 
        onClick={async (eo) =>{
          
          submitBtn(eo)
        } }>
    
      {spinloading ?  <ReactLoading type={"spin"} color={"white"} height={20} width={20} /> : "Submit"}  
    
        </button>
      
    </div>
       </Modal>  
  );
}

export default TaskModal;
