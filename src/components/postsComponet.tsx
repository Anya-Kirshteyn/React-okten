import type {IPost} from "../models/postsModels.ts";

interface Props{
    post:IPost
    children?:React.ReactNode
}
export const PostComponent=({post,children}:Props)=>{
    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            {children}
        </div>
    )
}