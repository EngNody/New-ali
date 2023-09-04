

import React from 'react';
import './edit-task.css'
import Header from './../../comp/header';
import Footer from './../../comp/Footer';
import { Helmet } from 'react-helmet-async';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config.js';
import Loading from '../../comp/loading';
// import Erroe404 from '../../comp/404';
// @ts-ignore
import Titlesection from './1-Titlesection'
import SupTaskaSection from './2-SupTaskaSection';
import Btnssections from './3-Btnssections';
import { useParams } from 'react-router-dom';


const EditTask = () => {

  let { appsameid } = useParams();


const [user, loading, error] = useAuthState(auth);

if (loading) {
  return (<Loading />)
}

if (error) {
  // return (<Erroe404 />)
    return <h1>Error : {error.message}</h1>

}



if (user) {
  return (
    <div>
      <Helmet>
            <title>Edit Task Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>

<Header />

<div className='edit-task'>

{/* Title */}

<Titlesection user={user} appsameid={appsameid}/>


{/* Sup tasks section */}

<SupTaskaSection user={user} appsameid={appsameid}/>


{/* Add more btn && delete btn */}

<Btnssections user={user} appsameid={appsameid}/>




</div>

<Footer />
    </div>
  );  
}



}

export default EditTask;
