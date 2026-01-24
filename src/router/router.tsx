import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/mainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {BestUserPage} from "../pages/BestUserPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {
                path:"bestuser", element: <BestUserPage/>
            },
            {path: 'users', element: <UsersPage/>}
        ]
    }
])