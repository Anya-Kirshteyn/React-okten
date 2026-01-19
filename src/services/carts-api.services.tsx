import {URLS} from "../constantas/urls.tsx";
import type {IOrderType} from "../models/dummyJSONmodels/allDummyJSONmodels.ts";


export const CartsService = {
    getAllCarts:async():Promise<IOrderType[]>=>{
        const res=await fetch(URLS.cartsDummyJSON.allCarts)
        const data=await res.json()
        return data.carts
    },
   getCartById:async(userId:number): Promise<IOrderType[]>=> {
       const res=await fetch(URLS.cartsDummyJSON.byUserid(userId))
       const data=await res.json()
       return data.carts
   }

}
