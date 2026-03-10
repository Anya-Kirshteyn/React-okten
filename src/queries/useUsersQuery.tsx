import {useQuery} from "@tanstack/react-query";
import {UsersService} from "../services/users.service.ts";

export const useUsersQuery=()=>useQuery({
    queryKey:["users"],
    queryFn:UsersService.getUsers,
    staleTime: 1000*60*5
})