import {urls} from "../constants/Urls.ts";
import type {ICart} from "../models/ICartModel.ts";

export const cartsApiService = {
    getCartsById: async (id: number): Promise<ICart> => {
        const res = await fetch(urls.carts.CartsById(id));
        return await res.json();
    }
};
