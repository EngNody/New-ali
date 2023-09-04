import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";



const Btnssections = ({user,appsameid}) => {

  const [value, loading, error] = useCollection(collection(db, user.uid));

  console.log(error)
  console.log(loading)
  console.log(value)


  return (
<section className='center allbtns flex'>
  <button className='add-more-btn'>Add More <i className="fa-solid fa-plus" /></button>
  <button className='delete'>Delete Task</button>
</section>
  );
}

export default Btnssections;
