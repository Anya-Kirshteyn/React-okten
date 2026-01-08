import {useState,useEffect} from "react";
import type {Icomment} from "../../models/commentModel.ts";
import {getComments} from "../../services/comments-api-service.tsx";
import CommentComponent from "../comment-component/commentComponent.tsx";


  const CommentsComponent=()=>{
    const [comments,setComments]=useState<Icomment[]>([]);

    useEffect(()=>{
        const fetchComments=async()=>{
            const comments = await getComments();
            setComments(comments)
        }
        fetchComments();
    },[])
    return(
        <div>
            {comments.map((comment)=><CommentComponent comment={comment} key={comment.id}/>
            )}
        </div>

    )



  }

 export default CommentsComponent;