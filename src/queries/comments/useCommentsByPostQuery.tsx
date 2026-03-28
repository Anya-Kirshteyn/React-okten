import {useQuery} from "@tanstack/react-query";

import {CommentsService} from "../../services/coments.service.ts";

export const useCommentsByPostQuery =(postId:number)=> useQuery({
    queryKey:['comments',{postId}],
    queryFn: ()=>CommentsService.getCommentByPostId(postId),
    staleTime:1000*60*5,
    enabled: !!postId
})