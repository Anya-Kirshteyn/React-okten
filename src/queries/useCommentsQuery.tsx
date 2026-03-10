import {useQuery} from "@tanstack/react-query";
import {PostsService} from "../services/posts.service.ts";

export const useCommentsQuery =()=> useQuery({
    queryKey:['comments'],
    queryFn:PostsService.getPosts,
    staleTime:1000*60*5
})