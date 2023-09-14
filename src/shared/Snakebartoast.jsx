import React from 'react';
import { Helmet } from 'react-helmet-async';

const Snakebartoast = ({movemessage}) => {


  
  return (


<div>
      <Helmet>
      <style type="text/css">{`
      .home .show-message{
background-color: whitesmoke;
font-size: 18px;
color: #1b1b1b;
padding: 8px 12px;
font-weight: normal;
border-radius: 5px;
position: fixed;
top: 100px;
/* right: 100vw; */
transition:all 1s;
}

.home .fa-circle-check{
  color: teal;
  margin-left: 5px;
}

/* .message{
  right: 3vw !important;
} */

  
      `}
      
      </style>
    </Helmet>
  
      <div>
            <p
                className="show-message"
                style={{ right: movemessage ? "20px" : "-100vw" }}
              >
                Task added successfully{" "}
                <i className="fa-regular fa-circle-check" />
              </p>
      </div>
      </div>
    );


}

export default Snakebartoast;
