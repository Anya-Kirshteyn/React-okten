import {useQuery} from "@tanstack/react-query";
import {CommentsService} from "../../services/coments.service.ts";

export const useCommentsQuery =()=>useQuery({
    queryKey:['posts'],
    queryFn: CommentsService.getComments,
    staleTime:1000*60*5
})