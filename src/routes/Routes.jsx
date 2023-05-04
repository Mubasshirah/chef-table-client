import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/loginRegister/login/Login";
import Register from "../Pages/loginRegister/register/Register";
import About from "../Pages/About/About";
import Error from "../Pages/error/Error";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
         
        }
      ]
    },
    {
        path:'/',
        element:<LoginLayout></LoginLayout>,
        children:[
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    },
    {
        path:'*',
        element:<Error></Error>
    }
  ]);

export default router;