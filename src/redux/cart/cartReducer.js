import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartTypes";

const initialState = {
    cart: []
};

const cartReducer  = (state = initialState, action)=> {
    switch (action.type) {
        case ADD_TO_CART:
            const newItem = action.payload;

            const findItem = state.cart.find(el=> newItem._id == el._id );

            let newCart = [];

            if(findItem) {
                const newCart = state.cart.map(el=> el._id == findItem._id ? newItem : el);

                return {
                    ...state,
                    cart: newCart
                };
            } else {
                return {
                    cart: [...state.cart, action.payload]
                };
            }

        case REMOVE_FROM_CART:
            
            return {
                ...state
            };
        
            
        default:
            return state;
    }
}; 

export default cartReducer;