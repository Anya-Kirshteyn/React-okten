import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/usersPage.tsx";
import {CommentsPage} from "../pages/commentsPage.tsx";
import {PostsPage} from "../pages/postsPage.tsx";


export const route=createBrowserRouter([
    {
        path:'/users', element:<UsersPage/>
    },
    {
        path:'/comments', element: <CommentsPage/>
    },
    {
        path:'/posts', element: <PostsPage/>
    }
])