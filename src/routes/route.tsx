import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/usersPage.tsx";
import {CommentsPage} from "../pages/commentsPage.tsx";
import {PostsPage} from "../pages/postsPage.tsx";
import {ComplexPage} from "../pages/complexPage.tsx";
import App from "../App.tsx";


export const route=createBrowserRouter([
    {path:"/",element:<App/>,children:[
            {
                path:'/users', element:<UsersPage/>
            },
            {
                path:'/comments', element: <CommentsPage/>
            },
            {
                path:'/posts', element: <PostsPage/>
            },
            {
                path:'/complex/:userId',element:<ComplexPage/>
            }
        ]},
])