import Header from "../comp/header";
import Footer from "../comp/Footer";
// import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate("Hi User");
  useEffect(() => {
    console.log("hiiiiiiiiii")
    if (!user && !loading) {
      navigate("/")
    }
    if (!user.emailVerified) {
      navigate("/")
    }
  })

  if (loading) {
    return (
      <div>
      <Header/>
      <main>
      <h2>Loading ...............</h2>
      </main>
      <Footer/>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (user) {
  return (
    <>
      <Helmet>
        <title>Profile Page</title>
        <meta name="description" content="HOMEEEEEEEEEEEE" />
        <style type="text/css" >
        {`
        main{
          flex-direction: column
        }
        h5{
          margin: 5px
        }
        .delete{
          margin-top:25px;
          background-color:#dc3545;
          padding:0.375rem 0.75rem;
          font-size:1rem;
          line-height:1.5;
          border-radius:0.25rem;
          border-color:#dc3545
        }
        .aligning{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        `}
        </style>
        </Helmet>

      <Header />

      {user && <main>
      
  <div className="aligning">
          <h5> Welcome : {user.displayName} <span>🧡</span></h5>
          <h5> E-mail : {user.email}</h5>
          <h5>Last Sign-in : <Moment fromNow date={user.metadata.lastSignInTime}/></h5>
          <h5>Account Created : <Moment fromNow date={user.metadata.creationTime}/></h5>
  </div>
  <button className="delete">Delete Account</button>

        </main>}

      {!user && (
        <main>
          <p className="pls">
            Please{" "}
            <Link style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>
      )}

      <Footer />
    </>
  );
  };

};

export default Profile;
