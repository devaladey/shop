import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { userAuth } from "../redux/user/userActions";
import AlertBox from "../components/AlertBox";
import Navbar from "../components/Navbar";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const {error, user} = useSelector(state=> state.user)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validateInput = e => {
        let emailValue = '';
        let passwordValue = '';

        if(e.target.type == 'email') {
            const EMAIL_PATTERN = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
            emailValue = e.target.value.trim();

            if(emailValue.length == 0) {
                setEmailError('Email must not be empty!!!');
            } 
            else {
                if(!EMAIL_PATTERN.test(emailValue)) {
                    return setEmailError('Email is not valid')
                } 
                setEmailError('')
                setEmail(e.target.value)
            }
        } else if(e.target.type == 'password') {
            passwordValue = e.target.value.trim();
            
            if(passwordValue.length == 0) {
                setPasswordError('Password must not be empty!!!');
            } else {
                setPasswordError('')
                setPassword(e.target.value)
            }
        }

        return 'yes'
    };

    const disableBtn = ()=> {
        return Boolean(email) || Boolean(password) ? false : true;
    };

    const login = async (e) => {
        e.preventDefault()
        const loginData = {
            email,
            password,
            purpose: 'login'
        };

        dispatch(userAuth(loginData));

        if(typeof(user._id) == 'undefined' && error.length > 0) {
            return false;
        } else {
            navigate("/")
        }
        
    }

    return (

        <>
            <Navbar showForm />
            { typeof(error) == 'string' && error.length > 0 && <AlertBox>{error}</AlertBox>}
            <div className="account">
                <form className="account-form" onSubmit={login}>
                    <span className="account-icon"></span>
                    <div className="account-control">
                        <input type="email" placeholder="Email" className="account-input" id="exampleInputEmail1" onChange={(e)=> setEmail(e.target.value)} onBlur={(e) => validateInput(e)} />
                        <label htmlFor="exampleInputEmail1" className="account-label">Email address</label>
                    </div>
                    <div className="account-input-error">{emailError}</div>
                    <div className="account-control">
                        <input type="password" placeholder="Password" className="account-input" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)} onBlur={(e) => validateInput(e)} />
                        <label htmlFor="exampleInputPassword1" className="account-label">Password</label>
                    </div>
                    <div className="account-input-error">{passwordError}</div>
                    <div className="account-control">
                        <button type="submit" className="account-btn" disabled={disableBtn()}>Login</button>
                    </div>
                    <Link className="account-text" to="/signup">Create Account</Link>
                </form>
            </div>
        </>
    );
}

export default Login;