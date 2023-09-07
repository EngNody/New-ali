import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Moment from "react-moment";
// import Moment from 'react-moment';

const Alltaskssection = ({ user }) => {
// console.log(user);

const [value, loading, error] = useCollection(collection(db, user.uid));

if (loading) {
return (
<section style={{ marginTop: "40px" }}>
<ReactLoading type={"spin"} color={"white"} height={77} width={77} />
</section>
);
}

if (error) {
return <h1>Error</h1>;
}

if (value) {
return (
<section className="all-tasks flex">
{value.docs.map((item) => {


    return (
    <article dir="auto"  className="one-task" key={item.data().id} >
    <Link to={`/edit-task/${item.data().id}`} >
        <h2 >{item.data().title}</h2>
        <ul>
          {/* {item.data().details.map((item) => {
            return(
               <li key={item}>{item}</li>
            )
          })} */}
          {/* key={item.appsameid} */}
          {/* ========================================================= */}
          {/* to show only two element */}
              {item.data().details.map((item, index) => {
          if (index < 2) {
            return <li key={item}> {item} </li>;
          } else {
            return false;
          }
        })}


          {/* ================================================== */}
          {/* <li>{item.data().details[0]}</li> */}
        </ul>

        <p>
          <Moment fromNow date={item.data().id} className="time" />

          {/* a Day ago */}
        </p>
      </Link>
    </article>
  );
})}

{/* ========================================================== */}

{/* <article dir="auto" className="one-task">
        <h2>New Task</h2>
        <ul>
          <li>Sup Task 1</li>
          <li>Sup Task 2</li>
        </ul>

        <p className="time">a Day ago</p>
      </article>


      <article dir="auto" className="one-task">
        <h2>شراء جوافه</h2>
        <ul>
          <li>شراء جوافه 1</li>
          <li>شراء جوافه 2</li>
        </ul>

        <p className="time">a Day ago</p>
        </article>  */}
</section>
);
}
};

export default Alltaskssection;
