import type {IUser} from "../../models/IUserModel.ts";
import type {FC} from "react";

type UserProps = {
    user: IUser[];
}

export const UserComponent:FC<UserProps> = ({user})=>{
    return (
        <div>
            <h2>{user.}</h2>
        </div>
    )
}