import React from 'react';
import Header from "./header";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";

// import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div>

      <Helmet>
        <title>Signin</title>

        <style type="text/css">
        {`
          .page-loading{
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border-top: 5px solid #dc3545;
            border-right: 5px solid #dc3545;
            
            animation: mymove 1s infinite linear;
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
      <div className="page-loading"></div>
        {/*  <h2>Loading ...............</h2> */}

  {/* <div>
  <ReactLoading type="spin" color="red" height={'20%'} width={'10%'} />
      </div>
      and npm uninstall react-loading in terminal */}

    </main>
    <Footer/>
    </div>
  );
}

export default Loading;
