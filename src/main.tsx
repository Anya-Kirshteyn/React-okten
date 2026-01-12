import './index.css'
import { RouterProvider} from "react-router-dom";
import {createRoot} from "react-dom/client";
import {router} from "./router/routes.tsx";



createRoot(document.getElementById('root')!)
.render(<RouterProvider router={router}/>)