

import Header from "../../comp/header";
import Footer from "../../comp/Footer";
import Loading from '../../comp/loading';
import Erroe404 from '../../comp/404';
import { Helmet } from "react-helmet-async";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config';
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";
import './Home.css'
import Modal from "../../shared/modal";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import { db } from '../../firebase/config';
import ReactLoading from 'react-loading';


const Home = () => {
  const [array, setarray] = useState([])
  const [subtask, setsubtask] = useState("")
  const [subtitle, setsubtitle] = useState("")
  const [spinloading, setspinloading] = useState(false)

  const addbtn = () => {
    array.push(subtask)
    console.log(array)
    setsubtask("")
  }

  const [user, loading, error] = useAuthState(auth);


  // level3
const [showmodal, setshowmodal] = useState(false);
// const forgetpassword = () => {
//   setshowmodal(true)
// }

const closemodal = () => {
  
setshowmodal(false)
}
  
  if (loading) {
    return (<Loading />)
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

          <section dir="auto" className="all-tasks flex">
            <article className="one-task">
          <Link to={"/edit-task"}>
                <h2>New Task</h2>
                <ul>
                  <li>Sup Task 1</li>
                  <li>Sup Task 2</li>
                </ul>
            
                <p className="time">a Day ago</p>
          </Link>
            </article>

            <article dir="auto" className="one-task">
              <h2>New Task</h2>
              <ul>
                <li>Sup Task 1</li>
                <li>Sup Task 2</li>
              </ul>

              <p className="time">a Day ago</p>
            </article>
{/* 
            <article dir="auto" className="one-task">
              <h2>New Task</h2>
              <ul>
                <li>Sup Task 1</li>
                <li>Sup Task 2</li>
              </ul>

              <p className="time">a Day ago</p>
            </article>

            <article dir="auto" className="one-task">
              <h2>شراء جوافه</h2>
              <ul>
                <li>شراء جوافه 1</li>
                <li>شراء جوافه 2</li>
              </ul>

              <p className="time">a Day ago</p>
            </article> */}

          </section>


          {/* Add new task BTN */}
<section>
  
  <button type="button" className="add-task-btn" onClick={() => {
    setshowmodal(true)
  }}>
    Add new task <i className="fa-solid fa-plus" />
  </button>
  
</section>

     {showmodal && <Modal closemodal={closemodal} >

  <div className="dadmodal">
      <input type="text" placeholder="Add title" typeof="email"
              value={subtitle}
      onChange={(eo) => {
        setsubtitle(eo.target.value)
          }}
      />
    <div>
        <input type="text"
        onChange={(eo) => {
          setsubtask(eo.target.value)
          }}
         placeholder="Details" typeof="email" value={subtask}/>

        <button className="add"  onClick={(eo) =>{
        eo.preventDefault();
        addbtn()
      } }>Add</button>
        
    </div>


    <ul className="newtask">
    { array.map((item) => (<li key={item}>{item}</li>))}
    </ul>


      <button className="submit" onClick={async (eo) =>{
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
  // websites: ["c4a.dev", "courses4arab.com"]
});  

console.log("done...........")

setspinloading(false)
setsubtitle("")
setarray([])
setshowmodal(false)
// closemodal()   its my true way

      } }>

    {spinloading ?  <ReactLoading type={"spin"} color={"white"} height={20} width={20} /> : "Submit"}  

      </button>
    
  </div>
     </Modal> }     


     <p className="task-message">Task added successfully  <i className="fa-regular fa-circle-check" /></p>       
            </main> 
        
          <Footer />
        </div>
      )
    }



}


};

export default Home;
