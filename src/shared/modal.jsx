


import React from 'react';


// close modal
const Modal = ({closemodal ,children}) => {

  return (
    <div>
        <div className="parent-of-module">
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
