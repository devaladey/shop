import { USER_FAIL, USER_LOGOUT, USER_REQUEST, USER_SUCCESS } from "./actionTypes";

const initialState = {
    user: {},
    error: '',
    loading: false
};

const userReducer  = (state = initialState, action)=> {
    switch (action.type) {
        case USER_REQUEST:
            
            return {
                loding: true,
                error: '',
                user: {}
            };

        case USER_LOGOUT:
            
            return {
                ...state,
                user: {}
            };
        
            case USER_SUCCESS: 

                return {
                    loading: false,
                    user: action.payload,
                    error: ''
                };

            case USER_FAIL: 

                return {
                    loading: false,
                    user: {},
                    error: action.payload
                };
    
        default:
            return state;
    }
}; 

export default userReducer;