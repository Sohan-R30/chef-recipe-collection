import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ChefWithRecipe from "../components/ChefWithRecipe/ChefWithRecipe";
import Error from "../components/Error/Error";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            errorElement: <Error></Error>,
            children:[
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: "/blog",
                    element: <Blog></Blog>
                },
                {
                    path: "/login",
                    element:<Login></Login>
                },
                {
                    path: "/registration",
                    element: <Registration></Registration>,
                },
                {
                    path:"/chef/:id",
                    element: <PrivateRoute><ChefWithRecipe></ChefWithRecipe></PrivateRoute>,
                    loader: ({params}) => fetch(`https://chef-recipe-collection-server-side-sohan-r30.vercel.app/chef/${params.id}`)
                }
            ]
        }
    ]
)


export default router;