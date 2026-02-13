import type {IUser} from "../models/IUser.ts";
import {type FC, memo} from "react";

type UserProps = {
    user:IUser;
    foo:()=>void;
    arr:number[]
}

export const UserComponent:FC<UserProps>=memo(
    ({arr,user,foo})=>{

    return(
        <div>
<p>{arr.join(', ')}</p>

            <button onClick={foo}>click</button>
            <div>
                <h1>{user.username}</h1>
                <h2>{user.email}</h2>
            </div>
        </div>
    )
})