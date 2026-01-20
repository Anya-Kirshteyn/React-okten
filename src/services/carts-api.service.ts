import {urls} from "../constants/Urls.ts";
import type {ICartsResponse} from "../models/ICartModel.ts";

export const cartsApiService = {
    getCartsById: async (id:number): Promise<ICartsResponse> => {
        const res = await fetch(urls.carts.CartsById(id));
        const data = await res.json();
        console.log(data);
        return data;
    }
};
