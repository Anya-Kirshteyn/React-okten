import {useEffect, useState} from "react";
import {type IUserCombination, UserComponent} from "./UserComponent.tsx";
import {UserService} from "../../services/user-api.services.tsx";

type Props = {
    source: string;
    onSelectUser: (id: number) => void
}

export const UsersComponent=({source,onSelectUser}:Props)=> {
    const [users,setUsers]=useState<IUserCombination[]>([])
    useEffect(()=>{
      if(source === 'dummyjson'){
          UserService.getUsersDummy().then(setUsers)
      }
    },[source])
    return (
        <>
            {users.map(user=>(<UserComponent
                                             user={user}
                                             key={user.id}
                                             onClick={()=> onSelectUser(user.id)}
            />))}

        </>
    )
}