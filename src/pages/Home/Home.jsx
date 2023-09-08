// @ts-nocheck


import Header from "../../comp/header";
import Footer from "../../comp/Footer";
import Loading from '../../comp/loading';
import Erroe404 from '../../comp/404';
import { Helmet } from "react-helmet-async";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,db } from '../../firebase/config';
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
// level3
import './Home.css'
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import TaskModal from './modal'
import Alltaskssection from './Alltaskssection';
// import { Loading } from '../../comp/loading';



const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const [movemessage, setmovemessage] = useState(false)






    // level3

// =====================================
//   functions of modal
// =====================================
const [showmodal, setshowmodal] = useState(false);
const [subtitle, setsubtitle] = useState("")
const [spinloading, setspinloading] = useState(false)
const [subtask, setsubtask] = useState("")
const [array, setarray] = useState([])


const closemodal = () => {
  setsubtitle("")
setarray([])
  setshowmodal(false)
  }

const titleInput = (eo) => { setsubtitle(eo.target.value)}

const detailsInput = (eo) => { setsubtask(eo.target.value)}

const addbtn = (eo) => {
  eo.preventDefault();
if (!array.includes(subtask)) {

  array.push(subtask)

}
  console.log(array)
  setsubtask("")
}

const submitBtn = async (eo) => {
  eo.preventDefault();
  setspinloading(true)
console.log("waiting...........")
// await setDoc(doc(db, "Ali Hassan", "test123"), {
// way to make random number instead "test123"
console.log(user)
const taskid = new Date().getTime()
await setDoc(doc(db, user.uid , `${taskid}` ), {
title: subtitle,
details : array,
id: taskid,
completed:false,
// websites: ["c4a.dev", "courses4arab.com"]
});  

console.log("done...........")

setspinloading(false)
setsubtitle("")
setarray([])
setshowmodal(false)
// closemodal()   its my true way
setmovemessage(true)
setTimeout(() => {
setmovemessage(false);
// @ts-ignore
}, "3000");
}



  
  if (loading) {
  <header/>
    return (<Loading />);
  <Footer/>
  }

  if (error) {
    return (<Erroe404 />)
  }


  if (!user) {
    return (
      <div>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
          <style type="text/css">{` 
          .titlesignin{
            color:teal
          }
        `}</style>
          </Helmet>
        <Header />
  
          <main>
            <p className="pls">
              Please{" "}
              <Link style={{ fontSize: "30px" }} to="/signin" className="titlesignin">
                sign in
              </Link>{" "}
              to continue... <span>🧡</span>
            </p>
          </main>
  
        <Footer />
      </div>
    )
  }

  if (user) {

    if (!user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>
    
          <Header />
    
            {  /*{user && <MainContent pageName="HOME Page" />}*/}
                <main>
            <p> Welcome : {user.displayName} <span>🧡</span></p>           
  
            <p>We send you an email to vertify your Account</p>
            <button 
            onClick={() => {
              sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                // ...
              })
            }
            } className="delete">Send Email</button>          </main>              
  
        
          <Footer />
        </div>
      )
    }

    if (user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>HOME Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>
    
          <Header />
    
            {/* user && <MainContent pageName="HOME Page" /> */}
            <main className="home">

           {/* <p> Welcome : {user.displayName} <span>🧡</span></p>  */}

          {/* OPTIONS (filtered data) */}

        <section className="parent-of-ptns">
            <button>Newest first</button>
          
            <button>Oldest first</button>
          
            <select id="browsers">
              <option value="Chrome"> All Tasks </option>
              <option value="Firefox"> Completed </option>
              <option value="Opera"> Not Completed </option>
            </select>
  
          </section>


          {/* show all tasks */}

          <Alltaskssection user={user}  />

          {/* Add new task BTN */}
<section>
  
  <button type="button" className="add-task-btn"
   onClick={() => {
    setshowmodal(true)
  }}>
    Add new task <i className="fa-solid fa-plus" />
  </button>
  
</section>

     {showmodal && 
     <TaskModal 
     closemodal={closemodal}
     titleInput={titleInput}
     detailsInput={detailsInput}
     addbtn={addbtn}
     submitBtn={submitBtn}
     spinloading={spinloading}
     array={array}
     subtask={subtask}
     subtitle={subtitle}
      />
     }     

     <p className="show-message"  
     style={{right :movemessage? "20px": "-100vw"}}
     
     >Task added successfully  <i className="fa-regular fa-circle-check" /></p>       
            </main> 
        
          <Footer />
        </div>
      )
    }



}


};

export default Home;
