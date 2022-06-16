import axios from "axios";
import { USER_FAIL, USER_LOGOUT, USER_REQUEST, USER_SUCCESS } from "./actionTypes";

const userRequest = () => {
    return {
        type: USER_REQUEST
    };
};
const userSuccess = (user) => {
    return {
        type: USER_SUCCESS,
        payload: user
    };
};
const userFail = (error) => {
    return {
        type: USER_FAIL,
        payload: error
    };
};

export const userLogout = () => {
    return {
        type: USER_LOGOUT
    };
};

export const userAuth = (formData)=> {
    return async (dispatch)=> {
        dispatch(userRequest())
        try {
            const res = await axios.post(`/api/v1/user/${formData.purpose}`, formData);

            const {data, token} = res.data;
            const user = data.user;
            user.token = token;
            dispatch(userSuccess(user))
        } catch (error) {
            dispatch(userFail(error.response.data.message))
        }
    }
};
