import type {IComment} from "../models/commentsModels.ts";
import {BASE_URL} from "./users.service.ts";


export const ComentsService={
     getComents:async ():Promise<IComment[]>=>{
        return fetch(BASE_URL+'/comments').then(res=>res.json())
}
}