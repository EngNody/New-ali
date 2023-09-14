import Header from "../../comp/Header";
import Footer from "../../comp/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase/config';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signin.css'
import { sendPasswordResetEmail } from "firebase/auth";
import Modal from '../../shared/Modal'
import ReactLoading from "react-loading";

const Signin = () => {
  const [email, setemail] = useState("");
  const [resetpass, setresetpass] = useState("");
  const [password, setpassword] = useState("");
  const [haserror, sethaserror] = useState(false);
  const [firebaseerror, setfirebaseerror] = useState("");
  const [showsendemail, setshowsendemail] = useState(false);
  const [spinloading, setspinloading] = useState(false);

  // const [showform, setshowform] = useState("");
  const navigate = useNavigate();

  // const [showmodule, setshowmodule] = useState(false);

  
// function reset password
const resetpassbtn = () => {
  // eo.preventDefault();
      
  sendPasswordResetEmail(auth, resetpass)
.then(() => {
setshowsendemail(true);
console.log(resetpass)
// Password reset email sent!
// ..
})
.catch((error) => {
const errorCode = error.code;
console.log(errorCode)
const errorMessage = error.message;
console.log(errorMessage)
// ..
});
}

// function sign in btn
const signinbtn = async (eo) => {
  eo.preventDefault();
  setspinloading(true)
await  signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
// Signed in 
const user = userCredential.user;
console.log(user)
navigate("/");

// ...
})
.catch((error) => {
// ali write codes with errorcode
const errorCode = error.code;
console.log(errorCode)
// i`m write codes with errorcode
const errorMessage = error.message;
console.log(errorMessage)
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
setspinloading(false)
}

// level3
const [showmodal, setshowmodal] = useState(false);
const forgetpassword = () => {
  setshowmodal(true)
}

const closemodal = () => {
  
setshowmodal(false)
}




  return (
    <div>
      <Helmet>
        <title>Signin</title>
      </Helmet>
      <Header />

      <main>
      
      {/* <form className={`ourmodal ${showform}`}> */}
    
    { showmodal && 
     <Modal closemodal={closemodal} >

     <div className="parent-of-module">
<form className={`ourmodal`}>
<div className="close" onClick={() => {
  // setshowform(" ")
   setshowmodal(false);

}}><i className="fa-solid fa-xmark"></i></div>

<input required placeholder=" E-mail : " type="email" 
onChange={(eo) => {
  setresetpass(eo.target.value)
}}
/>
<button onClick={() => {
  resetpassbtn()
}} >Reset password</button>
{ showsendemail && <p className="check-email">Please check your email to reset your email</p>}
</form> 
</div>


     </Modal>
    
    }
    
  



        <form>
   
          <input required placeholder=" E-mail : " type="email" onChange={(eo) => {

            setemail(eo.target.value)
          }} />
          <input required placeholder=" Password : " type="password" onChange={(eo) => {

            setpassword(eo.target.value)
          }}/>
          <button onClick={(eo) => {
            signinbtn(eo)
          }}> 
              {spinloading ?  

              <div style={{display:"flex", justifyContent: "center"}}>
              <ReactLoading type={"spin"} color={"white"} height={20} width={20} />
              </div>     

          :  "Sign in"}    
                  </button>
          <p className="account">
            Don't hava an account <Link to="/signup"> Sign-up</Link>
          </p>
          {haserror && <h2>{firebaseerror}</h2>}

          <p className="forget-pass" onClick={() => {
            // setshowform("showforgotpassword")
            forgetpassword()
            setshowmodal(true)
          }}>Forget Password ?</p>
        </form>


      </main>
      <Footer />
    </div>
  );
};





export default Signin;







