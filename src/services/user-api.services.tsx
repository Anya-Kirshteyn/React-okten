import type {IDummyJsonUser} from "../models/dummyJSONmodels/allDummyJSONmodels.ts";
import {URLS} from "../constantas/urls.tsx";
import type {IusersJSONplaceholder} from "../models/JSONplaceholderModels/allJSONplaceholderModels.ts";

export const UserService = {
    getUsersDummy:async ():Promise<IDummyJsonUser[]>=>{
        const res = await fetch(URLS.usersDummyJSON.allUsers);
        const data = await res.json();
        return data.users;
    },
    getUsersPlaceholder:async ():Promise<IusersJSONplaceholder[]>=>{
        return await fetch(URLS.usersPlaceholder.allUsers)
            .then(res => res.json())
    }
}
