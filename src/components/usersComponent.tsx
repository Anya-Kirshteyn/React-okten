import type {IUser} from "../models/usersModels.ts";

interface Props {
    user:IUser
}
export const UsersComponent=({user}:Props)=>{
    return (
        <div>
            <h2>{user.name}</h2>
            <h3>{user.email}</h3>
        </div>
    )
}