


import React from 'react';
import { Helmet } from 'react-helmet-async';


//  close modal ==> function to close model
const Modal = ({closemodal ,children}) => {

  return (
    <div>
        <div className="parent-of-module">

        <Helmet>
            <style type="text/css">{`
.ourmodal{
background-color: whitesmoke;
width: 400px;
height: 333px;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
/* scale: 0;
transform: translateY(-100vh); */
{/* transition: all 1s; */}
scale: 1;
transform: translateY(0);
{/* overflow: auto; */}

}

/* .showforgotpassword{
scale: 1;
transform: translateY(0);

} */

.parent-of-module{
  /* border: 2px solid red; */
position: fixed;
top: 0;
left: 0;
right: 0;bottom: 0;
/* background-color: #333333e2; */
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
animation: mymove 1s 1 ;
}

{/* .fa-xmark{
  animation: mymove 1s 1 ;
} */}
@keyframes mymove {
  0%   {scale: 0; transform: translateY(-100vh);}

  100% {scale: 1; transform:scale: translate(0);}
} 

            `}
            </style>
          </Helmet>

          <form className={`ourmodal`}>
      <div className="close" onClick={() => {
        // setshowform(" ")
        closemodal()
      }}>
      <i className="fa-solid fa-xmark"></i></div>
    

     {children}
      </form> 
    </div>
    </div>
  );
}

export default Modal;






  
    //   <input required placeholder=" E-mail : " type="email" 
    //   onChange={(eo) => {
    //     setresetpass(eo.target.value)
    //   }}
    //   />
    //   <button onClick={() => {
    //     resetpassbtn()
    //   }} >Reset password</button>
    //   { showsendemail && <p className="check-email">Please check your email to reset your email</p>}  
