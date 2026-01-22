import {useState,useEffect} from "react";
import type {IUser} from "../../models/IUserModel.ts";
import {usersApiService} from "../../services/users-api.service.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent=()=>{
    const [users,setUsers]=useState<IUser[]>([]);
    useEffect(() => {
        usersApiService.getAllUsers().then(setUsers);
    }, []);
    return(<div>
        {users.map((user)=><UserComponent user={user} key={user.id}/>)}
    </div>)
}

