import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, where} from "firebase/firestore";
import { db } from "../../firebase/config.js";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";

// import Moment from 'react-moment';

const Alltaskssection = ({ user }) => {
  // console.log(user);
  const { i18n } = useTranslation();

  const [selectname, setselectname] = useState("aaa");

  const [intialData, setintialData] = useState(
    query(collection(db, user.uid), orderBy("id","asc")))
// asc is default not nessary to write ,,,"desc" only is important


  const [myopacity, setmyopacity] = useState(false);

  const [value, loading, error] = useCollection(intialData);

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
    console.log(value.docs);
    console.log(selectname)

    return (
      <div>
      {/* OPTIONS (filtered data) */}
      
        <section className="parent-of-ptns">

    {selectname === "aaa" && (
      <div style={{display: "inline"}}>
            <button
             onClick={()=>{
              setintialData(query(collection(db, user.uid),orderBy("id","desc")))
              setmyopacity(true)
              // style={{opacity:"1"}}
            }}
            style={{opacity:myopacity ? '1' : '0.3'}}
            >
            {/* Newest first */}
            {i18n.language === "fr" && "Le plus récent"}
                {i18n.language === "en" && "Newest first"}
                {i18n.language === "ar" && "الأحدث أولاً"}
            
            </button>
        
            <button onClick={()=>{
              setintialData(query(collection(db, user.uid),orderBy("id","asc")))
              setmyopacity(false)
            }}
            style={{opacity:myopacity ? '0.3' : '1'}}
            // style={{opacity:` ${myopacity ? '0.3' : '1'}`}}
            >
            {/* Oldest first */}
            {i18n.language === "en" && "Oldest first"}
                {i18n.language === "ar" && "الأقدم أولاً"}
                {i18n.language === "fr" && "Le plus ancien"}
            
            </button>
        
      </div>)
    }

    {/* {selectname === "" && (
      <div style={{display: "inline"}}>
            <button
             onClick={()=>{
              setintialData(query(collection(db, user.uid),orderBy("id","desc")))
              setmyopacity(true)
              // style={{opacity:"1"}}
            }}
            style={{opacity:myopacity ? '1' : '0.3'}}
            >Newest first</button>
        
            <button onClick={()=>{
              setintialData(query(collection(db, user.uid),orderBy("id","asc")))
              setmyopacity(false)
            }}
            style={{opacity:myopacity ? '0.3' : '1'}}
            // style={{opacity:` ${myopacity ? '0.3' : '1'}`}}
            >Oldest first</button>
        
      </div>)
    } */}

{/* Ali do variables  setintialData() in lesson 19.2 */}
{/* i don't do this for anderstand codes easly */}
          <select value={selectname} id="browsers" onChange={(eo)=>{
            if(eo.target.value === "aaa"){
              setmyopacity(false)
              setintialData(query(collection(db, user.uid), orderBy("id", "asc")))
              setselectname("aaa")
            }
            else if(eo.target.value === "bbb"){
              setintialData(query(collection(db, user.uid), where("completed", "==", true)))
              setselectname("bbb")
            }
            else if(eo.target.value === "ccc"){
              setintialData(query(collection(db, user.uid), where("completed", "==", false)))
              setselectname("ccc")
            };
          }}>
            <option value="aaa">
             {/* All Tasks */}
             
             {i18n.language === "ar" && "جميع المهام"}
              {i18n.language === "en" && "All Tasks "}
              {i18n.language === "fr" && "Toutes les tâches"}{" "}
              </option>
            <option value="bbb"> 
            {/* Completed  */}
            
            {i18n.language === "ar" && "المهام المكتملة"}
              {i18n.language === "en" && "Completed Tasks"}
              {i18n.language === "fr" && "Tâches terminées"}{" "}
            </option>
            <option value="ccc">
             {/* Not Completed  */}
             
             {i18n.language === "en" && "Not Completed Tasks"}
              {i18n.language === "ar" && "المهام غير المكتملة"}
              {i18n.language === "fr" && "Tâches non terminées"}{" "}
             </option>
          </select>
        </section>

        <section className="all-tasks flex">
          {value.docs.length === 0 && (
            <h1>
              Congratulations! You have completed your tasks <span>🧡</span>
            </h1>
          )}

          {value.docs.map((item) => {
            return (
              <article dir="auto" className="one-task" key={item.data().id}>
                <Link className="task-link" to={`/edit-task/${item.data().id}`}>
                  <h2>{item.data().title}</h2>
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
      </div>
    );
  }
};

export default Alltaskssection;
