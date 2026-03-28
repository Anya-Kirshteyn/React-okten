import {UsePostsQuery} from "../queries/post/usePostsQuery.ts";


export const PostsPage=()=>{
    const{data:posts, isLoading}=UsePostsQuery()
    if (isLoading)return <div>Loading...</div>
    return (
        <div>
            <h1>Posts</h1>
            {posts?.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};