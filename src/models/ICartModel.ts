import type {IProductInCart} from "./IproductModel.ts";

export interface ICart {
    id: number;
    products: IProductInCart[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

export interface ICartsResponse {
    carts: ICart[];
    total: number;
    skip: number;
    limit: number;
}