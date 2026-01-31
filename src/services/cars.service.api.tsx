import axios from 'axios';
import type {ICar} from "../models/carModel.tsx";

const axiosInstance = axios.create({
    baseURL: "http://185.69.152.209/carsAPI/v1",
})
export const getAllCars = async ():Promise<ICar[]> => {
    const axiosResponse = await axiosInstance.get<ICar[]>('/cars');
    console.log(axiosResponse);
    console.log(axiosResponse.data)
    return axiosResponse.data
}
export const addCar = async (car:ICar) => {
    await axiosInstance.post('/cars', car)

}

// избыточный код(нет нужды в ответе, нужно только отправить форму)
// export const createCar = async (car:ICar):Promise<ICar> => {
//     const axiosResponse = await axiosInstance.post<ICar>('cars/create',car);
//     return axiosResponse.data
//
// }