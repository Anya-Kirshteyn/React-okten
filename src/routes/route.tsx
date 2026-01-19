import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import Layout from "../layouts/layout.tsx";


export const router=createBrowserRouter([
    {path:'/',element:<Layout/>,children:[
            {path:'users',element:<UsersPage/>,children:[
                    {path:':source', element: <></>},
                    {path:':source', element: <></>}
                ]},
            {path:'posts',element:<PostsPage/>,children:[
                    {path:':source', element:  <></>},
                    {path:':source', element:  <></>}
                ]},
            {path:'comments',element:<CommentsPage/>,children:[
                    {path:':source', element:  <></>},
                    {path:':source', element:  <></>}
                ]},
        ]}
])