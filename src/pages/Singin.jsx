import Header from "../comp/header";
import Footer from "../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [haserror, sethaserror] = useState(false);
  const [firebaseerror, setfirebaseerror] = useState("");
  const navigate = useNavigate();


  return (
    <>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
      
        <form>
   

          <input required placeholder=" E-mail : " type="email" onChange={(eo) => {

            setemail(eo.target.value)
          }} />
          <input required placeholder=" Password : " type="password" onChange={(eo) => {

            setpassword(eo.target.value)
          }}/>
          <button onClick={(eo) => {
            eo.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/");

    // ...
  })
  .catch((error) => {
    // ali write codes with errorcode
    const errorCode = error.code;
    console.log(errorCode)
    // i`m write codes with errorcode
    const errorMessage = error.message;
    // console.log(errorMessage)

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
          }}>Sign in</button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>
          {haserror && <h2>{firebaseerror}</h2>}
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Signin;
