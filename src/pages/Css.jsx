

import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Loading from '../comp/Loading';
import Erroe404 from '../comp/404';

import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { Link } from "react-router-dom";
import { sendEmailVerification } from "firebase/auth";

// import { useEffect } from 'react';
// import { useNavigate } from "react-router-dom";



const Css = () => {

  const [user, loading, error] = useAuthState(auth);
  console.log(user)

  if (loading) {
    return (<Loading />);
  }

  if (error) {
    return (<Erroe404 />);
  }

  if (!user) {
    return (
      <div>
        <Helmet>
          <title>Css Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>
        <Header />
  
          <main>
            <p className="pls">
              Please{" "}
              <Link style={{ fontSize: "30px" }} to="/signin">
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

    if (user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>Css Page</title>
            <meta name="description" content="HOMEEEEEEEEEEEE" />
          </Helmet>
    
          <Header />
          <MainContent pageName="Css Page" />
          <Footer />
        </div>
      )
    }

  if (!user.emailVerified) {
    return (
      <div>
        <Helmet>
          <title>Css Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>
  
        <Header />
  
          {  /*{user && <MainContent pageName="HOME Page" />}*/}
              <main>
          <p> Welcome : {user.displayName} <span>🧡</span></p>           

          <p>We send you an email to vertify your Account</p>
          <button 
          onClick={sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              // ...
            })
          } className="delete">Send Email</button>
          </main>              

      
        <Footer />
      </div>
    );

  };

}

  // return (
  //   <>
  //     <Helmet>
  //       <title>CSS Page</title>
  //       <meta name="description" content="csssssssssssssssssssss" />
  //     </Helmet>

  //     <Header />

  //     <MainContent pageName="CSS Page" />

  //     <Footer />
  //   </>
  // );
};

export default Css;
