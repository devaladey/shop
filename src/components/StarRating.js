function StarRating({rating}) {
    return ( 
        <>
            {rating && rating.map(el=> <span className="product__card-textstar star-rating" key={el}></span>)}
        </>
     );
}

export default StarRating;