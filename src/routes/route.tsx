import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/postsPage.tsx";
import CommentsPage from "../pages/commentsPage.tsx";


export const router=createBrowserRouter([
    {path:'/',element:<App/>,children:[
            {path:'users',element:<UsersPage/>,children:[
                    {path:'jsonplaceholder', element:<div>users of jsonplaceholder pseudo page</div>},
                    {path:'dummyjson', element:<div>users of dummyjson pseudo page</div>}
                ]},
            {path:'posts',element:<PostsPage/>,children:[
                    {path:'jsonplaceholder', element: <div>posts of jsonplaceholder pseudo page</div>},
                    {path:'dummyjson', element: <div>posts of dummyjson pseudo page</div>}
                ]},
            {path:'comments',element:<CommentsPage/>,children:[
                    {path:'jsonplaceholder', element: <div>comments of jsonplaceholder pseudo page</div>},
                    {path:'dummyjson', element: <div>comments of dummyjson pseudo page</div>}
                ]},
        ]}
])