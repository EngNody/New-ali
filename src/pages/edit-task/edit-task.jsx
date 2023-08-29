

import React from 'react';
import './edit-task.css'
import Header from './../../comp/header';
import Footer from './../../comp/Footer';
import { Helmet } from 'react-helmet-async';


const EditTask = () => {
  return (
    <div>
      <Helmet>
            <title>Edit Task Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

<Header />

<div className='edit-task'>

{/* Title */}

<section className='title center'>
  <h2>
    <input value={"Front End Developer"} type="text" className='title-input center'/>
    <i className="fa-regular fa-pen-to-square" />
  </h2>
</section>


{/* Sup tasks section */}

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


{/* Add more btn && delete btn */}

<section className='center allbtns flex'>
  <button className='add-more-btn'>Add More <i className="fa-solid fa-plus" /></button>
  <button className='delete'>Delete Task</button>
</section>




</div>

<Footer />
    </div>
  );
}

export default EditTask;
