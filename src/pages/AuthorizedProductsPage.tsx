import {useEffect, useState} from "react";
import {loadAuthProducts, refresh} from "../services/service.api.ts";
import type {IProduct} from "../models/IProduct.ts";

export const AuthorizedProductsPage=()=>{
    const [products,setProducts]=useState<IProduct[]>([]);
    useEffect(() => {
        const fetchProducts=async ()=>{
            try{
                const productsData=await loadAuthProducts();
                setProducts(productsData);
            } catch (err){
                console.log(err);
                await refresh();
                const productsData=await loadAuthProducts();
                setProducts(productsData)
            }
        }
        fetchProducts()
    }, []);

    return (<>
    <div>
        {products?.map(product=><div><h1><strong>{product.id}</strong></h1></div>)}
    </div>

    </>);
}