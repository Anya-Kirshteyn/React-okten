import type {FC} from "react";
import type {Icomment} from "../../models/commentModel.ts";
import styles from './comment.module.css'

type CommentComponentProps = {
    comment: Icomment;
}

const CommentComponent:FC<CommentComponentProps> = ({comment})=>{
    return (
        <div className={styles.commentCard}>
            <div className={styles.commentHeader}>
                <h4>{comment.name}</h4>
                <span className={styles.commentEmail}>{comment.email}</span>
            </div>

            <p className={styles.commentBody}>{comment.body}</p>

            <div className={styles.commentFooter}>
                <small>Post ID: {comment.postId}</small>
                <small>Comment ID: {comment.id}</small>
            </div>
        </div>
    )
}
export default CommentComponent