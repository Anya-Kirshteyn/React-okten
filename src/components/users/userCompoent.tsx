import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";


type userProps={
    user:IUser
}
export const UserComponent:FC<userProps> = ({user}) => {
    return (<div>
            <div
                style={{
                border: '1px solid #ddd',
                padding: '20px',
                margin: '10px',
                borderRadius: '8px',
                maxWidth: '300px',
                backgroundColor: '#f9f9f9'
            }}>
                <div>
                    <span>{user.firstName}</span>
                    <span>{user.lastName}</span>
                </div>
                <div>
                    <span>Возраст: </span>
                    <span>{user.age}</span>
                </div>
                <div>
                    <span>Email: </span>
                    <span>{user.email}</span>
                </div>
                <div>
                    <span>Дата рождения: </span>
                    <span>{user.birthDate}</span>
                </div>
                <div>
                    <span>Роль: </span>
                    <span>{user.role}</span>
                </div>
            </div>
        </div>
    )
}
