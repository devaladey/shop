import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { addItemToCart } from "../redux/cart/cartAction";
import Navbar from "../components/Navbar"

function CartList() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const userCart = useSelector(state => state.cart.cart)

    const totalAmount = userCart.reduce((acc, el)=> {
        return acc + (el.price * el.qty);
    }, 0);

    const addToCartHandler = (productId, qty)=> {
        dispatch(addItemToCart(productId, +qty));
    };

    const removeFromCartHandler = (item)=> {
        console.log(`${JSON.stringify(item)} removed from cart.`);
    };

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <>
            <Navbar showForm />
            <section className="cart-list">
            <div className="cart-list-bar">
                {isLoggedIn ? <h1 style={{ textAlign: "center" }}>Total Cart Products ({userCart.length})</h1>
                    : <h1 style={{ textAlign: "center" }}>Your cart is empty <Link to="/" style={{ textDecoration: "none", backgroundColor: "#333", color: "#fff", padding: "4px" }}>Go Shopping?</Link></h1>}
            </div>
            <div className="cart-items">
                {userCart.map(item =>
                    <div className="cart-item" key={item._id}>
                        <span className="item-remove" onClick={() => removeFromCartHandler(item)}>&times;</span>
                        <img src="download.jpg" alt="Cart Photo" className="item-img" />
                        <h3 className="item-title">{item.name}</h3>
                        <div className="item-quantity">
                            <label>Quantity {item.qty}</label>
                            <select  value={item.qty} onChange={(e)=> addToCartHandler(item._id, e.target.value)}>
                                {Array.from(new Array(item.countInStock)).map( (el, i)=> <option value={i + 1} key={i + 1}>{i + 1}</option>)}
                            </select>
                        </div>
                        <div className="item-subtotal">
                            <span>subtotal</span>
                            <p>${item.price * item.qty}</p>
                        </div>
                    </div>)
                }
            </div>
            {totalAmount ? <div className="cart-total">
                <span>Total:</span>
                <span>${`${totalAmount}`}</span>
            </div>: null}
            {isLoggedIn && <div className="cart-btn-container">
                <button className="cart-btn" onClick={() => navigate("/")}>Continue shopping</button>
                <button className="cart-btn checkout">Checkout</button>
            </div>}
        </section>
        </>
    );
}

export default CartList;