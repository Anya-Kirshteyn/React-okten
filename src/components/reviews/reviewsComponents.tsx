import type {FC} from "react";
import type {IReview} from "../../models/product-model.ts";
import ReviewsComponent from "./reviewsComponent.tsx";

type ReviewsProps = {
    reviews:IReview[]
}


const ReviewsComponents:FC<ReviewsProps>=({reviews})=>{
    return (
        <div>
            <h3>Reviews</h3>
            {reviews.map((review,index)=>(
                <ReviewsComponent review={review} key={index}/>
                )
            )}
        </div>
    )
}
export default ReviewsComponents;