import type {IDummyJsonUser} from "../models/dummyJSONmodels/allDummyJSONmodels.ts";
import {URLS} from "../constantas/urls.tsx";

export const UserService = {
    getUsersDummy:async ():Promise<IDummyJsonUser[]>=>{
        const res = await fetch(URLS.usersDummyJSON.allUsers);
        const data = await res.json();
        return data.users;
    }
}
