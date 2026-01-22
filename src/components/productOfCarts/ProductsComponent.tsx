import type {IProductInCart} from "../../models/IproductModel.ts";
import type {FC} from "react";


type ProductsProps = {
    product:IProductInCart;
}
export const ProductsComponent: FC<ProductsProps> = ({product}) => {
    return (
        <div className="product-card">
            <div className="product-image">
                <img src={product.thumbnail} alt={product.title} width={100} className="product-thumbnail"/>
            </div>

            <div>
                <h3 >Название продукта:{product.title}</h3>

                <div>
                    <span>${product.price}</span>
                    <span>× {product.quantity}</span>
                    <span>${product.total}</span>
                </div>

                <div>
                    <span>ID: {product.id}</span>
                </div>
            </div>
        </div>
    )
}