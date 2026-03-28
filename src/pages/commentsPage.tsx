
import {useCommentsQuery} from "../queries/comments/useCommentsQuery.ts";
import {CommentComponent} from "../components/commentsComponet.tsx";

export const CommentsPage=()=>{
    const {data,isLoading}=useCommentsQuery()
if(isLoading)return <div>Loading...</div>

    return (<div>

        <h1>Comments</h1>
        {data?.map((comment)=>(
            <CommentComponent comment={comment} key={comment.id}/>
        ))}

    </div>)
}
