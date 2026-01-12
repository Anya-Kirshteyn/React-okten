import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";

export const router=createBrowserRouter([
    {path:'/',element:<App/>,children:[
            {path:'users',element:<div>users pseudo page</div>},
            {path:'posts',element:<div>posts pseudo page</div>},
            {path:'comments',element:<div>comments pseudo page</div>},
            {path:'products',element:<div>products pseudo page</div>}
        ]}
])