import type {ProductType} from "../../models/dummyJSONmodels/allDummyJSONmodels.ts";
import type {FC} from "react";


type ProductProps={
    product:ProductType
}

export const ProductComponent:FC<ProductProps> = ({product}) => {
    return(
        <div>
            <h4>{product.title}</h4>

            <img src={product.thumbnail} alt={product.title} />

            <p>Id: {product.id}</p>
            <p>Price: {product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total: {product.total}</p>
            <p>Discount: {product.discountPercentage}%</p>
            <p>Discounted total: {product.discountedTotal}</p>
        </div>

    )
}