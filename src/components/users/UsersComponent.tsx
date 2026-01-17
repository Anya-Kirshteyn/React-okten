import {useEffect, useState} from "react";
import {type IUserCombination, UserComponent} from "./UserComponent.tsx";
import {UserService} from "../../services/user-api.services.tsx";

type Props = {
    source: string;
}

export const UsersComponent=({source}:Props)=> {
    const [users,setUsers]=useState<IUserCombination[]>([])
    useEffect(()=>{
      if(source === 'jsonplaceholder'){
          UserService.getUsersPlaceholder().then(setUsers)
      }
      if(source === 'dummyjson'){
          UserService.getUsersDummy().then(setUsers)
      }
    },[source])
    return (
        <>
            {users.map(user=>(<UserComponent user={user} key={user.id}/>))}

        </>
    )
}