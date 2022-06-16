import axios from "axios";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

export const addToCart = (product)=> {
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = (item)=> {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    };
};



export const addItemToCart = (id, qty)=> {

    return async (dispatch)=> {

        try {

            const res = await axios.get(`/api/v1/product/${id}`);
            const product = res.data.data.product;
            
            product.qty = qty;

            dispatch(addToCart(product))
            
        } catch (error) {
            console.log(error.response.data.message);
        }

        
    };
};