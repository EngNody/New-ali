

import React, { useState } from 'react';
import './edit-task.css'
import Header from './../../comp/header';
import Footer from './../../comp/Footer';
import { Helmet } from 'react-helmet-async';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase/config.js';
import Loading from '../../comp/loading';
// import Erroe404 from '../../comp/404';
// @ts-ignore
import Titlesection from './1-Titlesection'
import SupTaskaSection from './2-SupTaskaSection';
import Btnssections from './3-Btnssections';
import { useNavigate, useParams } from 'react-router-dom';
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import ReactLoading from 'react-loading';
// import ReactLoading from 'react-loading';
// import Loading from 'react-loading';







const EditTask = () => {

const [user, loading, error] = useAuthState(auth);
const navigate = useNavigate();
let { appsameid } = useParams();

// function area
// ======================
//  title section
// ======================

const titleinput = async (eo) => {
  await updateDoc(doc(db, user.uid, appsameid), {
    title: eo.target.value,
  });
}

// ======================
//  sup-Task section
// ======================

const completedcheckbox = async (eo) => {
  if (eo.target.checked){
    await updateDoc(doc(db, user.uid,appsameid ), {
      completed: true,

    });
  }
   else{
    await updateDoc(doc(db, user.uid,appsameid ), {
      completed: false,
    });               }
console.log(eo.target.checked)
}

const trashIcon = async (item) => {
  await updateDoc(doc(db, user.uid, appsameid), {
    details: arrayRemove(item),
  });
}

// ======================
//  BTNs section
// ======================
// const AddMoreBtn = (eo) => {
//   eo.preventDefault()

// }
const [showData, setshowData] = useState(false);
const deleteBTN = async (eo) => {
  // Ali said that this ranking codes is wrong
  // navigate("/");
  // await deleteDoc(doc(db, user.uid, appsameid));
  
  // Ali said that this ranking codes is true
  setshowData(true)
  await deleteDoc(doc(db, user.uid, appsameid));
  navigate("/" , { replace:true });
  // navigate("/");
}


// ===========================================
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
            {/* <meta name="description" content="HOMEEEEEEEEEEEE" /> */}
          </Helmet>

<Header />

{ showData ? (
  
  <main>
            <ReactLoading
              type={"spin"}
              color={"white"}
              height={77}
              width={77}
            />
          </main>

  ) : (
  <div className='edit-task'>

{/* Title */}

<Titlesection user={user} appsameid={appsameid} titleinput={titleinput}/>


{/* Sup tasks section */}

<SupTaskaSection user={user} appsameid={appsameid} completedcheckbox={completedcheckbox} trashIcon={trashIcon}/>


{/* Add more btn && delete btn */}

<Btnssections user={user}  deleteBTN={deleteBTN}/>




</div>



)}


<Footer />
    </div>
  );  
}



}

export default EditTask;
