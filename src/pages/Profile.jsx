import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from '../comp/loading';
// import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Moment from "react-moment";
import {  deleteUser } from "firebase/auth";
import Erroe404 from '../comp/404';


const Profile = () => {
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  })
  
    if (error) {
      return (<Erroe404 />);
    }
  
    if (user) {
      if (!user.emailVerified) {
        navigate("/");
      }
    }

    
// });


  // function delete btn 
const deletebtn = () => {
  deleteUser(user).then(() => {
    // 
    console.log("User deleted.")
  }).catch((error) => {
    // An error ocurred
    console.log(error.message)
  });
}


  if (loading) {
    return (<Loading />);
  }

  // if (error) {
  //   return (
  //     <div>
  //       <p>Error: {error}</p>
  //     </div>
  //   );
  // }

  if (user) {
    return (
      <>
        <Helmet>
          <title>Profile</title>

          <style type="text/css">{` 
        main{
          flex-direction: column;
          align-items: flex-start;
          align-items: center;
          width: fit-content;
          margin: auto;
        }
        .ddd{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .fa-heart{
          margin-left: 20px;
          color: red
        }
        
        `}</style>

        </Helmet>
        <Header />

        <main>
    <div className="ddd">
          <h6>UserName: {user.displayName} <span><i className="fa-solid fa-heart"></i></span></h6>
          <h6>Email: {user.email}</h6>
      
            <h6>
              Last Sign-in :{" "}
              <Moment fromNow date={user.metadata.lastSignInTime} />{" "}
            </h6>
      
            <h6>
              Account Created :{" "}
              <Moment fromNow date={user.metadata.creationTime} />
            </h6>
    </div>
          <button onClick={() => {
            deletebtn()
          }} className="delete">Delete account</button>
        </main>
        <Footer />
      </>
    );
  }
};

export default Profile;


// Firebase: Error (auth/requires-recent-login)