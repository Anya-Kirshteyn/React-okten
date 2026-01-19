import type {FC} from "react";

export interface IUserCombination{
    id:number;
    name?: string;
    username?: string;
    email: string;
    firstName?: string;///dummy
    lastName?: string;///dummy
    maidenName?: string; ///dummy
}

export interface UserProps {
    user:IUserCombination,
    onClick:()=>void,
}


export const UserComponent: FC<UserProps> = ({ user, onClick }) => {
    return (
        <div onClick={onClick}>
            <h1>{user.name || [user.firstName,user.lastName]}</h1>
            <b>user Id:{user.id}</b>
            <small>{user.email}</small>
        </div>
    );
};

