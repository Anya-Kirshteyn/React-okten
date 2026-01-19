import type {FC} from "react";

export interface IPostsCombination{
    id:number;
    userId:number;
    title:string;
    body:string;
}
type PropsPost={
    post:IPostsCombination
}
export const PostComponent:FC<PropsPost>=({post})=>{
    return (
        <div>
            <h1>{post.title}</h1>
            <small>User id: {post.userId}</small>
            <small>Post id# {post.id}</small>
            <p>{post.body}</p>
            <hr/>
        </div>)
}