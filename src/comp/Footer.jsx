import React from "react";
import    './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { i18n } = useTranslation();

//   return (
// <div className="myfooter">
//       <footer className="ali   ">
//         {/* Designed and developed by Courses4Arab.com */}


//                       {/* طريقه 1 */}
//         {/* {i18n.language === "en" && " Designed and developed by Courses4Arab.com"}
//         {i18n.language === "ar" && " تم التصميم بواسطة علي حسن "}
//         {i18n.language === "fr" && " Conçu et développé par Courses4Arab.com"} */}

        
//         <span>🧡</span>
//       </footer>
// </div>
//   );


  // eslint-disable-next-line no-lone-blocks
  {/* طريقه 2 */}
  if(i18n.language === "ar"){
    return (
      <div className="myfooter">
            <footer className="ali" dir="rtl">
             تم التصميم بواسطة علي حسن      
      
                            {/* طريقه 1 */}
              {/* {i18n.language === "en" && " Designed and developed by Courses4Arab.com"}
              {i18n.language === "ar" && " تم التصميم بواسطة علي حسن "}
              {i18n.language === "fr" && " Conçu et développé par Courses4Arab.com"} */}
      
              
              <span style={{margin:"10px"}}>🧡</span>
            </footer>
      </div>
        );
  }

  if(i18n.language === "en"){
    return (
      <div className="myfooter">
            <footer className="ali">
            Designed and developed by Courses4Arab.com    
      
                            {/* طريقه 1 */}
              {/* {i18n.language === "en" && " Designed and developed by Courses4Arab.com"}
              {i18n.language === "ar" && " تم التصميم بواسطة علي حسن "}
              {i18n.language === "fr" && " Conçu et développé par Courses4Arab.com"} */}
      
              
              <span style={{margin:"10px"}}>🧡</span>
            </footer>
      </div>
        );
  }

  if(i18n.language === "fr"){
    return (
      <div className="myfooter">
            <footer className="ali">
            Conçu et développé par Courses4Arab.com 
      
                            {/* طريقه 1 */}
              {/* {i18n.language === "en" && " Designed and developed by Courses4Arab.com"}
              {i18n.language === "ar" && " تم التصميم بواسطة علي حسن "}
              {i18n.language === "fr" && " Conçu et développé par Courses4Arab.com"} */}
      
              
              <span style={{margin:"10px"}}>🧡</span>
            </footer>
      </div>
        );
  }




};

export default Footer;
