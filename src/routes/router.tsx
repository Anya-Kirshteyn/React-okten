import {createBrowserRouter, type RouteObject} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/userPage.tsx";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path: 'users', element: <UsersPage/>},

        ]
    }

];
export const router = createBrowserRouter(routes);