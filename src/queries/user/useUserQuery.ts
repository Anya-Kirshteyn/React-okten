import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../../services/users.service.ts";

export const useUserQuery=(id:number| undefined)=>useQuery({
    queryKey:["user",id],
    queryFn:()=>UsersService.getUserById(id!),
    staleTime: 1000*60*5,
    enabled: !!id
    // Запрос выполнится только если id есть
})