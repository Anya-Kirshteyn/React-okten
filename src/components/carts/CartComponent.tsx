import type {IOrderType} from "../../models/dummyJSONmodels/allDummyJSONmodels.ts";
import type {FC} from "react";
import {ProductComponent} from "../products(cart-Dummy)/ProductComponent.tsx";

type PropsCart={
    cart:IOrderType
}
export const CartComponent:FC<PropsCart>=({cart})=>{
    return (
        <div>
            <h3>CART # {cart.id}</h3>
            {cart.products.map(product=>(<ProductComponent product={product} key={product.id}/>))}
        </div>
    )
}