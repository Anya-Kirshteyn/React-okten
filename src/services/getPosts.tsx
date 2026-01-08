import type {PostType} from "../models/post-model.ts";

export const getPosts = async (): Promise<PostType[]> => {
    const res = await fetch(import.meta.env.VITE_APP_POSTS);
const data = await res.json();
return data.posts
}
