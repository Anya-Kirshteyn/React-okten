import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import Layout from "../layouts/layout.tsx";


export const router=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
            {path:'users',element:<UsersPage/>,children:[
                    {path:':source', element: <></>}
                ]}

]}])