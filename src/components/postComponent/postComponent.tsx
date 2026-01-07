import type {PostType} from "../../models/postType.ts";
import type {FC} from "react";
import styles from "./PostComponent.module.css";


export interface PostComponent {
    postOne:PostType
}


const PostComponent:FC<PostComponent> = ({postOne}) => {
    return (
        <div className={styles.div}>
            <h3><mark>
                User ID:{postOne.userId}<br/>
                Title:{postOne.title}
            </mark></h3>
            <b>Post ID:{postOne.id}</b>
            <p>{postOne.body}</p>

        </div>

    )
}

export default PostComponent