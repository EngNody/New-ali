
import React, { useState } from 'react';
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDocument } from "react-firebase-hooks/firestore";
 import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Moment from 'react-moment';
// import Loading from 'react-loading';
import Erroe404 from '../../comp/404';



const SupTaskaSection = ({user,appsameid,completedcheckbox,trashIcon}) => {

  // const [value, loading, error] = useCollection(collection(db, user.uid));
  const [value, loading, error] = useDocument(doc(db, user.uid, appsameid));
  const [showaddnewtask, setshowaddnewtask] = useState(false);
  const [supTitle, setsupTitle] = useState("");


  if (error) {
    return (<Erroe404 />)
  }


if (value) {
  return (
    <section className='sub-task'>

    <div className='parent-time flex'>
      <p className='time'> Created: <Moment fromNow date={value.data().id} className="time" /></p>
      <div>
        <input onChange={ (eo) => {
          completedcheckbox(eo)
            }} 
             id='checkbox' type="checkbox"
              checked={value.data().completed}

            />
        <label htmlFor="checkbox">Completed </label>
      </div>
    </div>
    
    <ul>

    {value.data().details.map((item) => {
      return(
        <li className='card-task flex' key={item}>
        {item}
        <i onClick={ ()=>{
        trashIcon(item)
        }}  
        
         className="fa-solid fa-trash"/></li>
      )
    })}


    </ul>


    {showaddnewtask && (
      <div className='add-new-task flex'>
      
      <input value={supTitle}  className='add-task' type="text" 
          onChange={(eo)=>{
        setsupTitle(eo.target.value)
      }}
      />
      
      <button 
      
      onClick={async ()=>{
        await updateDoc(doc(db, user.uid, appsameid), {
          details: arrayUnion(supTitle),
        });

        setsupTitle("")

      }} 
      className='add'>Add</button>
      
      <button className='cancel' 
       onClick={()=>{
      setshowaddnewtask(false)
    }}>Cancel</button>
      
    </div>
    )}

  <div className='addbtn flex'>
      <button className='add-more-btn' onClick={()=>{
      setshowaddnewtask(true)
      
    }}>Add More <i className="fa-solid fa-plus" /></button>
      
  </div>
    </section>
  );
}
}

export default SupTaskaSection;
