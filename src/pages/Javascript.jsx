import Header from "../comp/Header";
import Footer from "../comp/Footer";
import Loading from '../comp/Loading';
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';


const Javascript = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate("Hi User");
  useEffect(() => {
    console.log("hiiiiiiiiii")
    if (!user) {
      navigate("/signin")
    }
  } , [user])

  if (loading) {
    return (<Loading />);
  }

  return (
    <>
      <Helmet>
        <title>JAVASCRIPT Page</title>
        <meta name="description" content="JAVASCRIPTTTTTTTTTTTTTTTTTTTTT" />
        <style type="text/css">{``}</style>
      </Helmet>
      <Header />
     
      <MainContent pageName="JAVASCRIPT Page" />
      <Footer />
    </>
  );
};

export default Javascript;
