import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../../services/users.service.ts";

export const useUsersQuery=()=>useQuery({
    queryKey:["user"],
    queryFn:UsersService.getUsers,
    staleTime: 1000*60*5,
    // Запрос выполнится только если id есть
})