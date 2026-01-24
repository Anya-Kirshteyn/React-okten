import {PaginationComponent} from "../components/pagination/pagination.component.tsx";
import {UsersComponent} from "../components/users/usersComponent.tsx";


export const UsersPage=()=>{
    return (
        <>
            <h2>Users: </h2>
            <PaginationComponent/>
            <UsersComponent/>
        </>
    )
}