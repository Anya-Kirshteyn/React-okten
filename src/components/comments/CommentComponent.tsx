import type {FC} from "react";


export interface ICommentCombination {
    id: number;
    body: string;
    postId: number;
    name?: string;
    user?:{username:string}///dummy
}

export interface ICommentProps {
    comment: ICommentCombination;
}
export const CommentComponent:FC<ICommentProps> = ({comment}) => {
    return (
        <div>
            <h1>{comment.name || comment.user?.username}</h1>
            <small>Comment id:{comment.id} </small>
            <small>Post id:# {comment.postId}</small>
            <p>{comment.body}</p>

        </div>
    )
}