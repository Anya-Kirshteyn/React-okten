import {createBrowserRouter, Router} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {CartsPage} from "../pages/CartsPage.tsx";


export const router = createBrowserRouter([
    {path:"/", element : <MainLayout/>, children:[
            {path:'users', element:<UsersPage/>, children:[{
                path:':id/cats', element:<CartsPage/>
                }]}
        ]},
])