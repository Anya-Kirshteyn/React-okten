import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICartModel.ts";
import {useParams} from "react-router-dom";
import {cartsApiService} from "../../services/carts-api.service.ts";
import {CartComponent} from "./CartComponent.tsx";

export const CartsComponent = () => {
    const { id } = useParams<{ id: string }>();
    const [cart, setCart] = useState<ICart | null>(null);

    useEffect(() => {
        if (!id) return;

        cartsApiService.getCartsById(Number(id)).then(setCart);
    }, [id]);

    if (!cart) {
        return <h3>no cart :(</h3>;
    }

    return <CartComponent cart={cart} />;
};
