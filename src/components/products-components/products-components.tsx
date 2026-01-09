import {useEffect, useState} from "react";
import type {IProductType} from "../../models/product-model.ts";
import {getProducts} from "../../services/getProducts-service.tsx";
import ProductComponent from "../product-component/product-component.tsx";


const ProductsComponents = () => {
    const [products, setProducts] = useState<IProductType[]>([])
    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        }
        fetchProducts()
        }
    ,[]);
    return (
        <div>
            {products.map((product =><ProductComponent product={product} key={product.id}/>))}
        </div>
    )
}
export default ProductsComponents;