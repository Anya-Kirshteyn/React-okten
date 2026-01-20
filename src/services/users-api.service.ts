import type {IUsersResponse} from "../models/IUserModel.ts";
import {urls} from "../constants/Urls.ts";

export const usersApiService = {
    getAllUsers: async (): Promise<IUsersResponse> => {
        const res = await fetch(urls.users.allUsers);
        const data = await res.json();
        console.log(data);
        return data;
    }
};
