import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ChefWithRecipe from "../components/ChefWithRecipe/ChefWithRecipe";



const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
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
                    path:"/chef/:id",
                    element: <ChefWithRecipe></ChefWithRecipe>,
                    loader: ({params}) => fetch(`https://chef-recipe-collection-server-side-sohan-r30.vercel.app/chef/${params.id}`)
                }
            ]
        }
    ]
)


export default router;