import type {FC} from "react";
import type {IReview} from "../../models/product-model.ts";
import ReviewsComponent from "./reviewsComponent.tsx";
import styles from './review.module.css'

type ReviewsProps = {
    reviews:IReview[]
}


const ReviewsComponents:FC<ReviewsProps>=({reviews})=>{
    return (
        <div className={styles.reviews}>
            <h3><b>Reviews</b></h3>
            {reviews.map((review,index)=>(
                <ReviewsComponent review={review} key={index}/>
                )
            )}
        </div>
    )
}
export default ReviewsComponents;