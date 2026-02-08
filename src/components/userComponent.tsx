import type {IUserWithToken} from "../models/IUserWithToken.ts";



type userProps = {
    user:IUserWithToken
}

export const UserWithToken = ({user}:userProps) => {
    return(
        <div>
           <h2> {user.username}</h2>
            <small>{user.email}</small>
            <p>{user.id}</p>
            <small style={{ display: 'inline-block',
                maxWidth: '100%',
                wordBreak: 'break-all',
                overflowWrap: 'break-word',
                whiteSpace: 'normal'}}>{user.accessToken}</small>
        </div>
    )
}