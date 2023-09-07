import React from 'react';
// import { useCollection } from "react-firebase-hooks/firestore";
// import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDocument } from "react-firebase-hooks/firestore";
 import { doc } from "firebase/firestore";
// import Loading from 'react-loading';
import Erroe404 from '../../comp/404';

 
const Titlesection = ({user, appsameid,titleinput}) => {


  // const [value, loading, error] = useCollection(collection(db, user.uid));
  const [value, loading, error] = useDocument(doc(db, user.uid, appsameid));

//   if (value) {
// console.log(value.data())
//   }

if (error) {
  return (<Erroe404 />)
}


if (value) {
  return (
    <section className='title center'>
    <h2>
      <input defaultValue={value.data().title} type="text"
      onChange={ (eo)=>{
        titleinput(eo)
      }}
       className='title-input center'/>
      <i className="fa-regular fa-pen-to-square" />
    </h2>
  </section>
  );
}
}
 
export default Titlesection;
