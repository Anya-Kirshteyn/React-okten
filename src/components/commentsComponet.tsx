import type {IComment} from "../models/commentsModels.ts";

interface Props{
    comment:IComment
}
export const CommentComponent=({comment}:Props)=>{
    return (
        <div>
            <div><small>{comment.postId} {comment.email}</small></div>
            <h3>{comment.body}</h3>
        </div>
    )
}