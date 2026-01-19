import {useEffect, useState} from "react";
import {CommentsServices} from "../../services/comments-api.services.tsx";
import {CommentComponent, type ICommentCombination} from "./CommentComponent.tsx";


type CommentsProps = {
    source:string
}
export const CommentsComponent=({source}:CommentsProps) => {
    const [comments, setComment]=useState<ICommentCombination[]>([]);
    useEffect(() => {
        if(source === 'jsonplaceholder'){
            CommentsServices.getCommentsPlaceholder().then(setComment)
        }
        if(source === 'dummyjson'){
            CommentsServices.getCommentsDummy().then(setComment)
        }
    }, [source]);
    return(
        <>
            {comments.map(comment=>(<CommentComponent comment={comment} key={comment.id}/>))}
        </>
    )
}