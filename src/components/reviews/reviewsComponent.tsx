import type {FC} from "react";
import type {IReview} from "../../models/product-model.ts";
import styles from './review.module.css'

type ReviewProps = {
    review:IReview
}

const ReviewsComponent:FC<ReviewProps>=({review})=>{
    return(
        <div className={styles.review}>
            <div className={styles.header}>
                <b>{review.reviewerName}</b>
                <small>Email:{review.reviewerEmail}</small>
                <p>User rating:⭐{review.rating}</p>
            </div>
            <p>{review.comment}</p>
            <small>{new Date(review.date).toLocaleDateString()}</small>
        </div>
    )
}

export default ReviewsComponent;