import { REVIEW_FAIL, REVIEW_REQUEST, REVIEW_SUCCESS } from "./reviewTypes";

const reviewReducer = (state=initialState, action)=> {
    switch (action.type) {
        case REVIEW_REQUEST:
            
            return {
                ...state
            };
        case REVIEW_SUCCESS:
            
            return {
                ...state
            };
        case REVIEW_FAIL:
            
            return {
                ...state
            };
    
        default:
            return state;
    }
};