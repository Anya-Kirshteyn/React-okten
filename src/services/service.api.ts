import axios from "axios";
import type {IUserWithToken} from "../models/IUserWithToken.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponse} from "../models/IProductsResponce.ts";
import {retriveLocalStorage} from "./helper.ts";
import type {ITokenPair} from "../models/tokenPair.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',

})
type LoginData={
    username: string,
    password: string,
    expiresInMins: number
}

axiosInstance.interceptors.request.use((requestObj)=>{
if(requestObj.method?.toUpperCase() === 'GET'){
    requestObj.headers.Authorization = 'Bearer '+ retriveLocalStorage<IUserWithToken>('user').accessToken;}
return requestObj;
})

export const login=async({username,password,expiresInMins}:LoginData):Promise<IUserWithToken>=>{
const {data:userWithTokens}=await axiosInstance.post<IUserWithToken>('/login',{username,password,expiresInMins})
    localStorage.setItem('user',JSON.stringify(userWithTokens))
    console.log(userWithTokens)
    return userWithTokens;
}

export const loadAuthProducts=async ():Promise<IProduct[]>=>{
      const {data:{products}} =await axiosInstance.get<IProductsResponse>('/products')
    return products;
}

export const refresh=async ()=>{
    const userWithToken=retriveLocalStorage<IUserWithToken>('user')
        const {data:{accessToken,refreshToken}}=await axiosInstance.post<ITokenPair>('/refresh',{
            refreshToken: userWithToken.refreshToken,
            expiresInMins:1
        });
    userWithToken.accessToken=accessToken;
    userWithToken.refreshToken=refreshToken
        localStorage.setItem('user',JSON.stringify(userWithToken));


}

