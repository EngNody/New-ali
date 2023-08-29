

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


const Home = () => {
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
      <input type="text" placeholder="Add title" typeof="email"/>
    <div>
        <input type="text" placeholder="Details" typeof="email"/>
        <button  onClick={(eo) =>{
        eo.preventDefault();
      } }>Add</button>
        
    </div>
      <button onClick={(eo) =>{
        eo.preventDefault();
      } }>Submit</button>
    
  </div>
     </Modal> }            
            </main> 
        
          <Footer />
        </div>
      )
    }



}


};

export default Home;
