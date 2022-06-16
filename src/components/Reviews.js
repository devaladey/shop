import { useState } from "react";
// import Alert from "./Alert";
import StarRating from "./StarRating";

function Reviews({rating, reviews}) {
    const [value, setValue] = useState(0)

    return (
        <>
        {
           reviews && reviews.length > 0 ?  (<div className="reviews">
            {reviews.map((review, i) => (
                <div className={ value == i ? "review__card active": "review__card"} key={review._id}>
                    <img src="/download.jpg" alt="Reviewer" className="review__card-avatar" />
                    <h6 className="review__card-user">{review.user.name}</h6>
                    <p className="review__card-para">{review.comment}</p>
                    <StarRating rating={rating} />
                    <p className="review__card-date">2022-01-04</p>
                </div>
            ))}

            <div className="review-indicators">
            {reviews.length > 1 && reviews.map((review, i) => <span className={ value === i ? "review-indicator active": "review-indicator"} key={review._id} onClick={()=> setValue(i)}></span>)}
            </div>
        </div>) : <h1>No review for this product</h1>
        }
        </>
        
    )
}

export default Reviews;
