import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"
import Reviews from "../components/Reviews";
import { addItemToCart } from "../redux/cart/cartAction";
import Navbar from '../components/Navbar'
// import reviews from "../data/reviews";

function ProductDetail() {
    const { id } = useParams()

    const [product, setProduct] = useState({})
    const [qty, setQty] = useState(1)
    const [comment, setComment] = useState('')
    const [productReview, setProductReview] = useState('')

    const dispatch = useDispatch()

    // const item = useSelector(state=> state.cart.cart)

    const user = useSelector(state=> state.user.user)
    

    useEffect(() => {
        axios.get(`/api/v1/product/${id}`)
            .then(res => {
                const product = res.data.data.product;
                setProduct(product)
            })
            .catch(error => {
                console.log(error)
            });
    }, [id])


    const addToCartHandler = ()=> {
        dispatch(addItemToCart(product._id, +qty));
    };

    const createReviewhandler = async (e)=> {
        e.preventDefault()

        const formData = {
            productReview,
            comment
        };

        const requestConfig = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        try {
            const res = await axios.post(`/api/v1/product/${id}/review`, formData, requestConfig);

            console.log('Response: ', res.data.data);
        } catch (error) {
            console.log('The Error: ',error)
        }

        
    }

    return (
        <>
            <Navbar showForm />
            {
                product ?
                    (
                        <>
                            <section className="product-detail">
                                <div className="detail-container">
                                    <div className="detail-container__img">
                                        <img src="/download.jpg" alt="Download" />
                                    </div>
                                    <div className="detail-container__text">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <ul className="detail-container__menu">
                                            <li className="detail-container__item">
                                                <span className="detail-container__title">Price</span>
                                                <span className="detail-container__value">${product.price}</span>
                                            </li>
                                            <li className="detail-container__item">
                                                <span className="detail-container__title">Status</span>
                                                <span className="detail-container__value">In Stock</span>
                                            </li>
                                            <li className="detail-container__item">
                                                <span className="detail-container__title">Reviews</span>
                                                <span className="detail-container__value">{product.reviews && product.reviews.length} reviews</span>
                                            </li>
                                            <li className="detail-container__item">
                                                <span className="detail-container__title">Quantity</span>
                                                <select className="detail-container__input" value={qty} onChange={(e) => setQty(e.target.value)}>
                                                    {Array.from(new Array(product.countInStock)).map( (el, i)=> <option value={i + 1} key={i + 1}>{i + 1}</option>)}
                                                </select>
                                            </li>
                                            <li className="detail-container__item">
                                                <button type="button" className="detail-container__btn" onClick={ addToCartHandler }>Add to Cart</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                            <section className="product-detail-bottom">
                                <div className="product-reviews">
                                    { product.reviews ? (<><h2 className="product-review__heading">Review(s) {product.reviews.length}</h2>
                                    <Reviews rating={[1, 2, 3]} reviews={product.reviews} /></>): <h2 className="product-review__heading">No review yet</h2>}
                                </div>
                                <div className="customer-review">
                                    <form onSubmit={e => createReviewhandler(e)}>
                                        <h4>Write a Customer review</h4>
                                        <label htmlFor="rating">Rating</label>
                                        <select id="rating" onChange={(e) => setProductReview(e.target.value)}>
                                            <option value={1} key={1}>1</option>
                                            <option value={2} key={2}>2</option>
                                            <option value={3} key={3}>3</option>
                                            <option value={4} key={4}>4</option>
                                            <option value={5} key={5}>5</option>
                                        </select>
                                        <label htmlFor="message">Comment</label>
                                        <textarea id="message" onChange={e=> setComment(e.target.value)}></textarea>
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            </section>
                        </>
                    ) : <h1>Loading</h1>
            }

        </>
    );
}

export default ProductDetail;




{/* <section className="product-detail">
                <div className="detail-container">
                    <div className="detail-container__img">
                        <img src="/download.jpg" alt="Download" />
                    </div>
                    <div className="detail-container__text">
                        <h2>Product name</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit blanditiis voluptatibus odit labore vero eos iusto expedita perspiciatis cupiditate?</p>
                        <ul className="detail-container__menu">
                            <li className="detail-container__item">
                                <span className="detail-container__title">Price</span>
                                <span className="detail-container__value">${25}</span>
                            </li>
                            <li className="detail-container__item">
                                <span className="detail-container__title">Status</span>
                                <span className="detail-container__value">In Stock</span>
                            </li>
                            <li className="detail-container__item">
                                <span className="detail-container__title">Reviews</span>
                                <span className="detail-container__value">1 reviews</span>
                            </li>
                            <li className="detail-container__item">
                                <span className="detail-container__title">Quantity</span>
                                <select className="detail-container__input" onChange={(e)=> console.log(e.target.value)}>
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                </select>
                            </li>
                            <li className="detail-container__item">
                                <button className="detail-container__btn">Add to Cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="product-detail-bottom">
                <div className="product-reviews">
                    <h2 className="product-review__heading">Reviews</h2>
                    <Reviews rating={[1,2,3]} review={reviews} />
                </div>
                <div className="customer-review">
                    <form>
                        <h4>Write a Customer review</h4>
                        <label id="rating">Rating</label>
                        <select for="rating" onChange={(e)=> console.log(e.target.value)}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                        </select>
                        <label id="message">Comment</label>
                        <textarea for="message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </section> */}