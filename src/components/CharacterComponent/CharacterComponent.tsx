import type {FC, ReactNode} from "react";
import './CharacterComponent.css'
import type {Isimpson} from "../../models/ISimpson.ts";



export type CharacterPropsType = {
    simpson:Isimpson;
    children:ReactNode
}
export const CharacterComponent:FC<CharacterPropsType  > = ({simpson,children}) => {
    return (
        <div>
            <h2>{simpson.name} {simpson.surname}</h2>
            <h4>Age:{simpson.age}</h4>
            <img src={simpson.photo} alt={simpson.name} width='150' />
            <p>{children}</p>
        </div>

    )
}


