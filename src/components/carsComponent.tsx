import {useEffect, useState} from "react";
import type {ICar} from "../models/carModel.tsx";
import {getAllCars} from "../services/cars.service.api.tsx";
import {CarComponent} from "./carComponent.tsx";


export const CarsComponent=()=>{
    const [cars,setCars]=useState<ICar[]>([])
    useEffect(()=>{
        getAllCars().then(setCars)
    },[])

    return (<div>
        {cars.map(car=><CarComponent car={car} key={car.id}/>)}
    </div>)
}