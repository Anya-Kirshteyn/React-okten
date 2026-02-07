import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";

export const router= createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
            {index:true, element:<HomePage/>},
            {path:'login', element:<LoginPage/>}
        ]},
])