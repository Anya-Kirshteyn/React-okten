import type {IProductType} from "../models/product-model.ts";

export const getProducts=async ():Promise<IProductType[]> =>{
    const resp= await fetch(import.meta.env.VITE_APP_PRODUCTS)
    const data=await resp.json();
    return data.products
}