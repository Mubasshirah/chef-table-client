import {createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/loginRegister/login/Login";
import Register from "../Pages/loginRegister/register/Register";
import About from "../Pages/About/About";
import Error from "../Pages/error/Error";
import ChefRecipe from "../layout/ChefRecipe";
import SingleChefRecipe from "../Pages/SingleChefRecipe/SingleChefRecipe";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
     
    },
    {
        path:'/chef',
        element:<ChefRecipe></ChefRecipe>,
        children:[
            {
                path:':id',
                element:<SingleChefRecipe></SingleChefRecipe>,
                loader:({params})=>fetch(`https://assignment-10-chef-table-server-mubasshirah.vercel.app/chef/${params.id}`)
            }
        ]
    }
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
    },
    
  ]);

export default router;