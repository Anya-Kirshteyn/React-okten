import {BASE_URL} from "./users.service.ts";
import type {IPost} from "../models/postsModels.ts";


export const PostsService ={
    getPosts:async () :Promise<IPost[]> => {
        return fetch(BASE_URL+'/posts').then(res=>res.json())
},
    getPostByUserId:async (userId:number) :Promise<IPost[]> => {
        return fetch(`${BASE_URL}/posts?userId=${userId}`).then(res=>res.json())
    }
}