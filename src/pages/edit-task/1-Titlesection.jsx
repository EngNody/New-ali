import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";


 
const Titlesection = ({user,appsameid}) => {


  const [value, loading, error] = useCollection(collection(db, user.uid));
  console.log(error)
  console.log(loading)
  console.log(value)

  console.log(appsameid)


  return (
    <section className='title center'>
    <h2>
      <input defaultValue={"Front End Developer"} type="text" className='title-input center'/>
      <i className="fa-regular fa-pen-to-square" />
    </h2>
  </section>
  );
}
 
export default Titlesection;
