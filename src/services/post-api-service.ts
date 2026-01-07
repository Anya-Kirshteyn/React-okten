import type {PostType} from "../models/postType.ts";


const postsURL=import.meta.env.VITE_APP_POSTS;

export const getPosts= async (): Promise<PostType[]> =>{
    const posts = await fetch(postsURL);
    return posts.json()
}