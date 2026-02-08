import {useEffect, useState} from "react";
import {login} from "../services/service.api.ts";
import type {IUserWithToken} from "../models/IUserWithToken.ts";
import {UserWithToken} from "../components/userComponent.tsx";

export const LoginPage=()=>{
    const [user,setUser]=useState<IUserWithToken | null>(null);
    useEffect(() => {
        login({username:'emilys', password:'emilyspass', expiresInMins:5}).then(setUser)
    }, []);
    return (<div>
        <h1>LoginPage</h1>

        {user && <UserWithToken user={user} key={user.id}/>}
    </div>)
}