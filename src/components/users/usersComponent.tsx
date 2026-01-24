import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useSearchParams} from "react-router-dom";
import {UserApiService} from "../../services/user-api.service.ts";
import type {IUsersResponse} from "../../models/userResponce.ts";
import {UserComponent} from "./userCompoent.tsx";

export const UsersComponent=()=>{
    const [query]=useSearchParams()
    const [users,setUsers]=useState<IUser[]>([]);
    useEffect(()=>{
        const currentPg=query.get('page') || '1';
        UserApiService.getUsers(currentPg).then(({users}:IUsersResponse)=>{
            setUsers(users);
        })

    },[query])
    return (<div style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
        {users.map((user)=><UserComponent user={user} key={user.id}/>)}
    </div>)
}
