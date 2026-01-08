import type {PostType} from "../../models/post-model.ts";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/getPosts.tsx";
import PostComponent from "../post-component/post-component.tsx";

const PostsComponents=()=>{
    const [posts,setPosts]=useState<PostType[]>([]);
    useEffect(()=>{
        const fetchPosts=async () => {
            const postsFetched = await getPosts();
            setPosts(postsFetched);
        }
            fetchPosts()
        }, [])
    return(
        <div>
            {posts.map((post=>
                <PostComponent onePost={post} key={post.id}/>
            ))}
        </div>
    )

}
export default PostsComponents;