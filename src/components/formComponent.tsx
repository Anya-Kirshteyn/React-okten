import {useForm} from "react-hook-form";
import type {ICar} from "../models/carModel.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/car.validator.ts";
import {addCar} from "../services/cars.service.api.tsx";


export const CarFormComponent =() => {
    const {
        handleSubmit,
        register,
        formState: {errors} ///без isValid на кнопке т.к handleSubmit сам контролирует всё

    } = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const customHandleSubmit = (FormDataProps: ICar) => {
        addCar(FormDataProps)
        console.log(FormDataProps);///выводит объект нової машины
    }

    return(<div><form onSubmit={handleSubmit(customHandleSubmit)}>
        <label>Brand:<input type="text"{...register('brand')}/></label>
        {errors.brand && <div>{errors.brand.message}</div>}
        <label>Price:<input type="number"{...register('price')}/></label>
        {errors.price && <div>{errors.price.message}</div>}
        <label>Year:<input type="number"{...register("year")}/></label>
        {errors.year && <div>{errors.year.message}</div>}

        <button>Submit new car</button>

    </form>

    </div>)

}
// *handleSubmit → главный контролёр валидации
// *isValid → вспомогательный флаг для UI
// *isValid + disabled → часто ломает UX
// *с Joi isValid почти всегда false до ввода данных