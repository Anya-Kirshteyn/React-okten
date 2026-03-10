import {usePostsQuery} from "../queries/usePostsQuery.tsx";

export const PostsPage=()=>{
    const{data:posts}=usePostsQuery()
    console.log(posts)
    return (<div>PostsPage</div>)
}