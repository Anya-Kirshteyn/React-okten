import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {CreateCarsPage} from "../pages/CreateCarPage.tsx";
import {CarsPage} from "../pages/carsPage.tsx";


export const router= createBrowserRouter([
    {path:'/',element : <App/>, children:[
            {path:'cars', element: <CarsPage/>},
            {path:'cars/create', element: <CreateCarsPage/>}
        ]},
])