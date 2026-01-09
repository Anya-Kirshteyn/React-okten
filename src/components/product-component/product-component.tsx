import type {IProductType} from "../../models/product-model.ts";
import type {FC} from "react";
import styles from './productComponent.module.css'
import MetaButtonComponent from "../meta-button-component/metaButtonComponent.tsx";
import ReviewsComponents from "../reviews/reviewsComponents.tsx";


export type ProductPropsType = {
    product:IProductType
}
const ProductComponent:FC<ProductPropsType> = ({product}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card__content}>
            <div className={styles.header}>
                <div className={styles.description}>
                    <h3>{product.title}</h3>
                    <p>product brand:{product.brand}</p>
                    <p>description:{product.description}</p>
                    <p>category:{product.category}</p>
                    <p>Rating:{product.rating}</p>
                    <small>left in stock: {product.stock}</small>
                    <small>stock status: {product.availabilityStatus}</small>
                </div>
                <img src={product.thumbnail} alt={product.title}/>
            </div>

            <div className={styles.salesInformation}>
                <b>Price:{product.price}</b>
                <mark>discount %:{product.discountPercentage}</mark>
                <small>SKU code{product.sku}</small>
            </div>

            <div  className={styles.capacity}>
                <p>weight:{product.weight}</p>
                <div>
                    dimensions:
                    <ul>
                        <li>width:{product.dimensions.width}</li>
                        <li>height:{product.dimensions.height}</li>
                        <li>depth:{product.dimensions.depth}</li>
                    </ul>
                </div>
            </div>

       <div><ReviewsComponents reviews={product.reviews}/></div>

            <div className={styles.info}>
                <p>warranty:{product.warrantyInformation}</p>
                <p>shipping information:{product.shippingInformation}</p>
                <p>return policy:{product.returnPolicy}</p>
                <b>minimal order quantity:{product.minimumOrderQuantity}</b>

            </div>

            <MetaButtonComponent meta={product.meta}/>

        </div> </div>
    )
}
export default ProductComponent