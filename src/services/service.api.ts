import axios from "axios";
import type {IUserWithToken} from "../models/IUserWithToken.ts";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',

})
type LoginData={
    username: string,
    password: string,
    expiresInMins: number
}
export const login=async({username,password,expiresInMins}:LoginData):Promise<IUserWithToken>=>{
const {data:userWithTokens}=await axiosInstance.post<IUserWithToken>('/login',{username,password,expiresInMins})
    localStorage.setItem('user',JSON.stringify(userWithTokens))
    console.log(userWithTokens)
    return userWithTokens;
}
