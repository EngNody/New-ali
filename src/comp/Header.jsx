import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import "../theme.css";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config.js';
import {  signOut } from "firebase/auth";
import { useTranslation } from 'react-i18next';



const Header = () => {
  const { t, i18n } = useTranslation();
  const [user] = useAuthState(auth);

  const { theme, toggleTheme } = useContext(ThemeContext);


  
  return (
    <div className="myheader">
    
      <header className="hide-when-mobile ali">
      {/*style={{width: "155px" ,padding: "20px 10px !important"}}*/}
        <h1>
          <Link to="/" className={"logo"}>c4a.dev</Link>
        </h1>
        {/* <button
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="theme-btn"
        >
          {theme}
        </button> */}

        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            toggleTheme(theme === "Light" ? "Dark" : "Light");
          }}
          className="fa-solid fa-sun"></i>





        <ul className="elementsulhead flex">

          <li className="main-list lang">
          <p style={{fontWeight:"400"}}>{t("lang")}</p>
          

          <ul className="lang-box">
            <li  onClick={()=>{
              i18n.changeLanguage("ar")
            }}  dir="rtl"><p>العربية</p> 
          { i18n.language === "ar" && (<i className="fa-solid fa-check"/>)}
            </li>

            <li  onClick={()=>{
              i18n.changeLanguage("en")
            }}><p>English</p>
            {i18n.language === "en" && (<i className="fa-solid fa-check"/>)}
             </li>

            <li  onClick={()=>{
              i18n.changeLanguage("fr")
            }}><p>Frensh</p> 
            {i18n.language === "fr" && (<i className="fa-solid fa-check"/>)}
            </li>

          </ul>
          </li>

        {!user &&  <li className="main-list">
            <NavLink className="main-link" to="/signin">
            {t("signin")}
            </NavLink>
          
          </li>  }
        


          {!user &&  <li className="main-list">
            <NavLink className="main-link" to="/signup">
            {t("signup")}
            </NavLink>
          
          </li>   }
          

          {user &&  <li onClick={() => {
            signOut(auth).then(() => {
              console.log("Sign-out successful.")
            }).catch((error) => {
              // An error happened.
            });
          }} className="main-list">
            <NavLink className="main-link" to={"/"}>

            {t("signout")}

            </NavLink>
          
          </li>   }


        
          {user &&   <li className="main-list">
            <NavLink className="main-link" to="/about">
              {t("about")}
            </NavLink>
            <ul className="sub-ul">
              <li>
                <a href="#">Full Course</a>
              </li>
              <li>
                <a href="#">Crash Course</a>
              </li>
              <li>
                <a href="#">learn in 1h</a>
              </li>
            </ul>
          </li> }

          {user &&   <li className="main-list">
          <NavLink className="main-link" to="/css">
            {/* Css  */}
            {t("support")}

          </NavLink>
          <ul className="sub-ul">
            <li>
              <a href="#">Full Course</a>
            </li>
            <li>
              <a href="#">Css Courses</a>
            </li>
            <li className="mini-projects">
              <a href="#">learn in 1h  <i className="fas fa-plus" /> </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="#">Project 1</a>
                </li>
                <li>
                  <a href="#">Project 2</a>
                </li>
                <li>
                  <a href="#">Project 3</a>
                </li>
              </ul>
            </li> 
          </ul>
        </li> }  
          
        {/*  {user &&   <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            <ul className="sub-ul sub-of-js">
              <li>
                <a href="/javascript">coming soon🔥</a>
              </li>
            </ul>
        </li>} */}
      

          {user &&   <li className="main-list">
          <NavLink className="main-link" to="/profile">
            {t("account")}
          </NavLink>
  
        </li> }

        </ul>
      </header>


    {/*  <header className="show-when-mobile ali">
        <h1>c4a.dev</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Full Course</NavLink>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">Full Course</NavLink>
              </li>
              <li>
                <a href="#">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>*/}
    </div>
  );
};

export default Header;
