import type {IUser} from "../../models/IUserModel.ts";
import type {FC} from "react";
import {useNavigate} from "react-router-dom";

type UserProps = {
    user: IUser;
}

export const UserComponent:FC<UserProps> = ({user})=>{
    const navigation=useNavigate()
    const onButtonClickNavigateCartsById=()=> {
        console.log('click')
        navigation('/users/'+user.id+'/carts')
    }

    return (
        <div>
            <h2>{user.username}</h2>
            <small>{user.email}</small>
            <small>{user.role}</small>
            <p>country of origin: {user.address.country}</p>
            <button className={'my-5'} onClick={onButtonClickNavigateCartsById}>Click for Carts of User
            </button>
            <hr/>
            {}
        </div>
    )
}