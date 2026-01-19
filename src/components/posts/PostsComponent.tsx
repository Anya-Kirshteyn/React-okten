import {useEffect, useState} from "react";
import {type IPostsCombination, PostComponent} from "./PostComponent.tsx";
import {PostsServices} from "../../services/posts-api.services.tsx";


export type PropsPosts={
    source:string
}
export const PostsComponent=({source}:PropsPosts)=>{
    const [posts, setPosts]=useState<IPostsCombination[]>([]);
    useEffect(()=>{
        if(source === 'jsonplaceholder'){
            PostsServices.getPostsPlaceholder().then(setPosts)
        }
        if(source === 'dummyjson'){
            PostsServices.getPostsDummy().then(setPosts)
        }
    },[source])
    return (
        <>
            {posts.map(post=>(<PostComponent post={post} key={post.id}/>))}

        </>
    )
}
