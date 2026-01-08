import type {PostType} from "../../models/post-model.ts";
import type {FC} from "react";
import styles from './post-component.module.css'
import TagsComponents from "../tags-components/tags-components.tsx";


type PostsPropType={
    onePost:PostType
}

const PostsComponent:FC<PostsPropType> = ({onePost}) => {
    return (
        <div className={styles.PostContainer}>
            <h3>{onePost.title}</h3>
           <div className={styles.idDiv}>
               <small>UserID:{onePost.userId}</small>
               <small>Post ID:{onePost.id}</small>
           </div>
            <p>{onePost.body}</p>

            <div className={styles.footerCard}>
                <div> <TagsComponents tags={onePost.tags}/> </div>

                 <p>Views:{onePost.views}</p>

                <div>
                    <span className={styles.reactions}>Likes:👍 {onePost.reactions.likes}</span>
                    <span className={styles.reactions}>Dislikes:👎 {onePost.reactions.dislikes}</span>
                </div>
            </div>

        </div>
    )
}

export default PostsComponent