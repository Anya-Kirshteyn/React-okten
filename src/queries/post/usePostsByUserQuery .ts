import {useQuery} from "@tanstack/react-query";
import {PostsService} from "../../services/posts.service.ts";

export const usePostsByUserQuery =(userId:number| undefined)=>useQuery({
    queryKey:['posts', { userId }],
    queryFn:()=>PostsService.getPostByUserId(userId!),
    staleTime:1000*60*5,
    enabled: !!userId
})