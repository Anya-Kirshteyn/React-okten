import type {IUser} from "../../models/IUserModel.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser;
}

export const UserComponent:FC<UserProps> = ({user})=>{
    return (
        <div>
            asdadadad
            <h2>{user.username}</h2>
            <small>{user.email}</small>
            <small>{user.role}</small>
            <p>country of origin: {user.address.country}</p>
        </div>
    )
}