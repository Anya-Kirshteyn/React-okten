import {simpsons} from "../../data/simpsonsArray.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";

export const FamilyComponent=()=>{

  return (
     <div>
       {
         simpsons.map((value,index)=><CharacterComponent simpson={value} key={index}>
           {value.info}
           </CharacterComponent>)
       }
     </div>
  )
}