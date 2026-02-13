import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./userComponent.tsx";
import type {IUser} from "../models/IUser.ts";



export const UsersComponent=()=>{
    const [users,setUsers]=useState<IUser[]>([])
    useEffect(()=>{
        fetch('https://dummyjson.com/users')
            .then(res => res.json())
            .then(data=> setUsers(data.users));
    },[])

    const arr:number[]=useMemo(()=>{
      return  [11,22,33]},[]

    )
    const foo=useCallback(()=>{
        return console.log('test')
    },[])
    return(
        <div>{users.map(user=><UserComponent user={user} foo={foo} arr={arr} key={user.id}/>)}</div>

    )
}

