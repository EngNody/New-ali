import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from './pages/Singin';
import Signup from './pages/Signup';
import Erroe404 from './comp/404';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Erroe404/>,
  },
  {
    path: "/signin",
    element: <Signin />,
  },


  {
    path: "/signup",
    element: <Signup />,
  },



  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <Javascript />,
  }, 
 {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  const { theme } = useContext(ThemeContext);


  return (
    <div className={`${theme}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
