import type {IUser} from "../models/usersModels.ts";
export const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

export const UsersService = {
     getUsers:async ():Promise<IUser[]>=>{
         return fetch (BASE_URL+'/users').then(res=>res.json())
     }
}