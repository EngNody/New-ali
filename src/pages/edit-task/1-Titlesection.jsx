import React, { useRef } from 'react';
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
// import Loading from 'react-loading';
import Erroe404 from '../../comp/404';
import ReactLoading from 'react-loading';

 
const Titlesection = ({user, appsameid,titleinput}) => {

  const inputElement = useRef(null);

  // const [value, loading, error] = useCollection(collection(db, user.uid));
  const [value, loading, error] = useDocument(doc(db, user.uid, appsameid));

//   if (value) {
// console.log(value.data())
//   }

if (loading) {
  return (
  <main>
  <ReactLoading type={"spin"} color={"white"} height={77} width={77}   className='blackloading' />

  </main>)
}

if (error) {
  return (<Erroe404 />)
}


if (value) {
  return (
    <section className='title center'>
    <h2>
      <input defaultValue={value.data().title} type="text"
      style={{textDecoration: value.data().completed ? "line-through wavy #454545" : null}}
      onChange={ (eo)=>{
        titleinput(eo)
      }}
      ref={inputElement}
       className='title-input center'/>
      <i className="fa-regular fa-pen-to-square"   
      onClick={() => {  inputElement.current.focus()  }}
      />
    </h2>
  </section>

  
  );
}
}
 
export default Titlesection;
