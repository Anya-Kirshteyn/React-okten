import type {IUser, IUsersResponse} from "../models/IUserModel.ts";
import {urls} from "../constants/Urls.ts";

export const usersApiService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const res = await fetch(urls.users.allUsers);
        const data: IUsersResponse = await res.json();
        console.log(data);
        return data.users;
    }
};
