import Header from "../comp/header";
import Footer from "../comp/Footer";
import Loading from '../comp/loading';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from 'react';

import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile ,sendEmailVerification} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';




const Signup = () => {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [haserror, sethaserror] = useState(false);
  const [firebaseerror, setfirebaseerror] = useState("");

  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    if (user) {
    if (user.emailVerified) {
      navigate("/")
    }
  }
  })

  // function when click button sign up
const signupbtn = (eo) => {
  eo.preventDefault();
            
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });

      updateProfile(auth.currentUser, {
        displayName: userName, 
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        navigate("/");
        // Profile updated!
        // ...
      }).catch((error) => {
        console.log("error")
        // An error occurred
        // ...
      });

      console.log("doneeeeeeeeee")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;

      sethaserror(true)
      // setfirebaseerror(errorMessage)
  
  switch (errorCode) {
    case "auth/invalid-email":
      setfirebaseerror("Wrong Email")
      break; 
       case "auth/user-not-found":
        setfirebaseerror("Email Not found")
        break; 
       case "auth/wrong-password":
      setfirebaseerror("Wrong Password")
      break; 
      case "auth/weak-password":
        setfirebaseerror("Weak Password")
        break; 
      case "auth/email-already-in-use":
        setfirebaseerror("email-already-in-use")
        break; 
      case "auth/too-many-requests":
        setfirebaseerror("Too-many-requests , Please try again later !!!")
        break; 
    default:
      setfirebaseerror("Please check Your Email & Password")
      break;
  }

      // { true && <h1>Error {errorCode}</h1>} you can write errorMessage here not in p element down (block scoop)
  
    });
}


  if (loading) {
    return (<Loading />);
  }

if (user) {
  if (!user.emailVerified) {
    return (
      <div>
      <Header/>
      <main>
      <p>We send you an email to vertify your Account</p>
      <button className="delete">Send Again</button>
      </main>
      <Footer/>
      </div>
    );
  }
}

if (!user) {
  
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Header />

      <main>
        <form>
          <p style={{ fontSize: "23px", marginBottom: "22px" }}>Create a new account <span>🧡</span> </p>
        
          <input onChange={(eo) => {

            setuserName(eo.target.value)
          }} required placeholder=" User Name : " type="text" />
        
          <input onChange={(eo) => {

            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <input onChange={(eo) => {

            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            signupbtn(eo)
          }}>Sign up</button>
          <p className="account">
            Already hava an account <Link to="/signin"> Sign-in</Link>
          </p>
          {haserror && <h2>{firebaseerror}</h2>}

        </form>
      </main>
      <Footer />
    </>
  );
}
};

export default Signup;
