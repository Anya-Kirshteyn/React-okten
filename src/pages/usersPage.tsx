import {useUsersQuery} from "../queries/user/useUsersQuery.tsx";
import { UsersComponent} from "../components/usersComponent.tsx";

export const UsersPage=()=>{
    const {data, isLoading}=useUsersQuery()
if (isLoading)return <div>Loading...</div>

    return (<div>
        <h1>Users:</h1>
        {data?.map((user)=>(
            <UsersComponent key={user.id} user={user}/>
        ))}
    </div>)
}