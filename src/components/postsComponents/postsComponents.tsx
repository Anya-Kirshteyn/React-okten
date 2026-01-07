import PostComponent from "../postComponent/postComponent.tsx";
import {getPosts} from "../../services/post-api-service.ts";
import {useEffect,useState} from "react";
import type {PostType} from "../../models/postType.ts";


const PostsComponent = () => {
    const [posts, setPosts]=useState<PostType[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const data=await getPosts();
            setPosts(data)
        }
        fetchPosts();
    },[])
    return (<div>
        {posts.map((post) => (
            <PostComponent postOne={post} key={post.id} />
        ))}
    </div>)


}
export default PostsComponent