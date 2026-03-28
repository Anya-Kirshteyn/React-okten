import type {IPost} from "../models/postsModels.ts";
import {useCommentsByPostQuery} from "../queries/comments/useCommentsByPostQuery.tsx";
import {PostComponent} from "./postsComponet.tsx";
import {CommentComponent} from "./commentsComponet.tsx";

export const PostWithCommentsComponent =({post}:{post:IPost}) =>{
    const {data:comments, isLoading,error}=useCommentsByPostQuery(post.id);
    return (
        <PostComponent post={post} key={post.id}>
            <div style={{ marginLeft: '20px', borderLeft: '2px solid #ccc', paddingLeft: '10px' }}>
            <h4>Comments:</h4>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error.message}</p>}
                {!isLoading && !error && comments?.length === 0 && <b><p>no comments</p></b>}
                {!isLoading && !error&&comments?.map(comment=>(
                    <CommentComponent comment={comment} key={comment.id}/>
                ))}
            </div>

        </PostComponent>
    )
}