import type {IUsersResponse} from "../models/userResponce.ts";
import {URl} from "../constants/urls.ts";


export const UserApiService = {
 getUsers: async (page:string): Promise<IUsersResponse> => {
     const limit=5
     const skip=limit *(Number(page) - 1);
     const resp= await fetch(URl.users+'?limit=5'+'&skip='+skip)
     .then(value=>value.json())
     console.log(resp)
     return resp;
 }
}