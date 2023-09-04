import React from 'react';
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config";




const SupTaskaSection = ({user,appsameid}) => {

  const [value, loading, error] = useCollection(collection(db, user.uid));
  console.log(error)
  console.log(loading)
  console.log(value)


  return (
    <section className='sub-task'>

    <div className='parent-time flex'>
      <p className='time'>Created: 6 days ago</p>
      <div>
        <input id='checkbox' type="checkbox" />
        <label htmlFor="checkbox">Completed </label>
      </div>
    </div>
    
    <ul>
    <li className='card-task flex'>HTML <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>CSS <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>JAVA SCRIPT <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>REACT <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>CSS <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>CSS <i className="fa-solid fa-trash" /></li>
    <li className='card-task flex'>CSS <i className="fa-solid fa-trash" /></li>
    </ul>
    
    
    </section>
  );
}

export default SupTaskaSection;
