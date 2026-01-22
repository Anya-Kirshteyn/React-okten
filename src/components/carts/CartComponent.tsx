

import type {ICart} from "../../models/ICartModel.ts";
import {type FC} from "react";
import {ProductsComponent} from "../productOfCarts/ProductsComponent.tsx";


type CartProp={
    cart:ICart
}
export const CartComponent:FC<CartProp>=({cart})=>{

    return (
        <div>
            <h2>ID:{cart.id}</h2>
            <mark>Total: {cart.total}</mark>
            <p><small>total products{cart.totalProducts}</small>
                <small> total Quantity{cart.totalQuantity}</small></p>

            <hr/>

            {cart.products.map(product=>(<ProductsComponent product={product} key={product.id}/>))}

        </div>
    )
}