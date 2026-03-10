import {useQuery} from "@tanstack/react-query";
import {PostsService} from "../services/posts.service.ts";

export const usePostsQuery=()=>useQuery({
    queryKey:['posts'],
    queryFn:PostsService.getPosts,
    staleTime:1000*60*5
})