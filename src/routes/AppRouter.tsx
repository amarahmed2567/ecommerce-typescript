import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//layouts
import MainLayout from '@layouts/MainLayout'

//Pages
import Home from '@pages/Home';
import Aboutus from '@pages/Aboutus';
import Products from "@pages/Products";
import Categories from '@pages/Categories';
import Login from '@pages/Login';
import Register from '@pages/Register';
import Error from "@pages/Error"

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
             index:true,
            element:<Home/>
            },
            {
                path:"categories",
                element:<Categories/>
            },
            {
                path:"/categories/products/:prefix",
                element:<Products/>,
                loader:({params})=>{
                    if(typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)){
                     throw new Response("Bad Request", { status: 400 ,statusText:"Categorie not found" });
                    }
                     return true;
             }
            },
            {
                path:"about-us",
                element:<Aboutus/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    }
   
])

function RouteingApp() {
  return (<RouterProvider router={router}/>)
}

export default RouteingApp