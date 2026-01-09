
import type {FC} from "react";
import styles from './tagsComponets.module.css'


export type TagsProps = {
    tags:string[];
}
const TagsComponents:FC<TagsProps>=({tags})=>{
    return (
        <ul className={styles.tag}>
            {tags.map((tag,index)=>(
                <li key={index}>
                    {tag}
                </li>
            ))
            }
        </ul>
    )
}
export default TagsComponents;