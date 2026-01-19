import {useEffect, useState} from "react";
import type {IOrderType} from "../../models/dummyJSONmodels/allDummyJSONmodels.ts";
import {CartsService} from "../../services/carts-api.services.tsx";
import {CartComponent} from "./CartComponent.tsx";

type Props={
    userId: number | null
}

export const CartsComponent=({userId}:Props)=>{
    const [carts,setCarts]=useState<IOrderType[]>([])
    useEffect(()=>{
        if(!userId) return;
        CartsService.getCartById(userId).then(setCarts)
    },[userId])
    return (<div>
        {carts.map(cart=><CartComponent cart={cart} key={cart.id}/>)}
    </div>)
}