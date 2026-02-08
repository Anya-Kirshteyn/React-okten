import type {IProduct} from "./IProduct.ts";

export interface IProductsResponse{
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}