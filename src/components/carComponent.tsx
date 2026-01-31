import type {ICar} from "../models/carModel.tsx";
import type {FC} from "react";


interface CarsProps{
    car:ICar
}

export const CarComponent:FC<CarsProps>=({car})=>{
    return (<div>
        <ul>
            <li>id # {car.id}
        </li>
        <li><strong>Brand: {car.brand}</strong></li>
        <li>Price: {car.price}</li>
            <li>Year: {car.year}</li>
        </ul>
    </div>)
}