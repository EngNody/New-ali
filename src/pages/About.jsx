import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';


const About = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate("Hi User");
  useEffect(() => {
    console.log("hiiiiiiiiii")
    if (!user && !loading) {
      navigate("/signin")
    }
  } , [user])

  if (loading) {
    return (
      <div>
      <Header/>
      <main>
      <h2>Loading ...............</h2>
      </main>
      <Footer/>
      </div>
    );
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <div>
          <Helmet>
            <title>About Page</title>
            <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
          </Helmet>
          <Header />
          <MainContent pageName="About Page" />
          <Footer />
        </div>
      );
    }

    if (!user.emailVerified) {
      navigate("/")
    }
  }



};

export default About;
