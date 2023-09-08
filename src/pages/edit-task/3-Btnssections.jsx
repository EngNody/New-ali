import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";
// import Loading from 'react-loading';
// import Erroe404 from '../../comp/404';
import Loading from './../../comp/loading';



const Btnssections = ({user,deleteBTN}) => {

  const [value, loading, error] = useCollection(collection(db, user.uid));


  // if (error) {
  //   return (<Erroe404 />)
  // }

if (value) {
  return (
<section className='center allbtns flex'>

  <button onClick={(eo)=>{
    deleteBTN(eo)
  }} className='delete'>Delete Task</button>
</section>
  );  
}


}

export default Btnssections;
