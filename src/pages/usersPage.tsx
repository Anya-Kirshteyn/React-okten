import {useUsersQuery} from "../queries/useUsersQuery.tsx";

export const UsersPage=()=>{
    const {data:users}=useUsersQuery()
    console.log(users)

    return (<div>UsersPage</div>)
}