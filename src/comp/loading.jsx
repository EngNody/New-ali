import React from 'react';
import { Helmet } from "react-helmet-async";
// import ReactLoading from 'react-loading';
import Header from './Header';
import Footer from './Footer';
// import ReactLoading from 'react-loading';

// import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div>

      <Helmet>
        {/* <title>Signin</title> */}

        <style type="text/css">
        {`
          .page-loading{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border-top: 5px solid #dc3545;
            border-right: 5px solid #dc3545;
            color:red;
            animation: mymove 1s infinite linear;
            z-index:100;
          }
          
          @keyframes mymove{
            0% {transform: rotate(0deg);}
            100% {transform: rotate(360deg);}
          }
        `}
        </style>
      </Helmet>
<Header/>
    <main>
{/* ============================================================================================= */}
        {/* to do animated circle loading */}
{/* ============================================================================================= */}
    {/* <div style={{ fill: "rgb(255, 255, 255)", height: 64, width: 64 }}>
    
    <svg className="icon-loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <path transform="translate(-8 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="-8 0; 2 0; 2 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.25;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(2 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="2 0; 12 0; 12 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.35;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(12 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="12 0; 22 0; 22 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.45;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </path>
  <path transform="translate(24 0)" d="M4 12 A4 4 0 0 0 4 20 A4 4 0 0 0 4 12"> 
    <animateTransform attributeName="transform" type="translate" values="22 0; 32 0; 32 0;" dur="0.8s" repeatCount="indefinite" begin="0" keyTimes="0;.55;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </path>
</svg>

</div> */}
{/* ============================================================================================== */}

      <div className="page-loading"></div>
         {/* <h2>Loading ...............</h2> */}

  {/* <div>
  <ReactLoading type="spin" color="red" height={'20%'} width={'10%'} />
      </div> */}
    {/*   and npm uninstall react-loading in terminal */}

    </main>
    <Footer/>
    </div>
  );
}

export default Loading;
