import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from 'react';

import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [haserror, sethaserror] = useState(false);
  const [firebaseerror, setfirebaseerror] = useState("");

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

            setemail(eo.target.value)
          }} required placeholder=" E-mail : " type="email" />
          <input onChange={(eo) => {

            setpassword(eo.target.value)
          }} required placeholder=" Password : " type="password" />
          <button onClick={(eo) => {
            
            eo.preventDefault();
            
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/signin");
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
};

export default Signup;
