import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';


const Html = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate("Hi User");
  useEffect(() => {
    console.log("hiiiiiiiiii")
    if (!user) {
      navigate("/signin")
    }
  } , [user])


  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
      <Header />
      <MainContent pageName="About Page" />
      <Footer />
    </>
  );
};

export default Html;
