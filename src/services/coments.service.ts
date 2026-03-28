import type {IComment} from "../models/commentsModels.ts";
import {BASE_URL} from "./users.service.ts";


export const CommentsService={
     getComments:async ():Promise<IComment[]>=>{
        return fetch(BASE_URL+'/comments').then(res=>res.json())
},
    getCommentByPostId:async (postId:number):Promise<IComment[]> => {
       return   fetch(`${BASE_URL}/comments?postId=${postId}`).then(res=>res.json())
    }
}