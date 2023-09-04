

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./pages/Home";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Css from "./pages/Css";
import Javascript from "./pages/Javascript";
// LEVEL2
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import Signin from './pages/signin/Singin.jsx';
import Signup from './pages/Signup';
import Erroe404 from './comp/404';
// import Edittask from './pages/edit-task/edit-task.jsx'
import EditTask from "./pages/edit-task/edit-task.jsx";


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
  {
    path: "/edit-task/:appsameid",
    element: <EditTask />,
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
