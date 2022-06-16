import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { userAuth } from '../redux/user/userActions';
import Navbar from '../components/Navbar'

function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')

    const dispatch = useDispatch()


    const validateInput = e => {
        let nameValue = '';
        let emailValue = '';
        let passwordValue = '';
        let confirmPasswordValue = '';

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
            if(e.target.id == 'exampleInputPassword1') {
                passwordValue = e.target.value.trim();
            
                // Password validation section
                if(passwordValue.length == 0) {
                    setPasswordError('Password must not be empty!!!')
                } else {
                    setPasswordError('')
                    setPassword(e.target.value)
                }
            }
            else if(e.target.id == 'exampleInputConfirmPassword1') {
                // Confirm Password validation section
                if(confirmPasswordValue.length == 0) {
                    if(password !== confirmPassword) {
                        return setConfirmPasswordError('Password mismatch!!!')
                    }
                    setConfirmPasswordError('Confirm Password must not be empty!!!')
                } else {
                    if(password !== confirmPassword) {
                        return setConfirmPasswordError('Password mismatch!!!')
                    }
                    setConfirmPasswordError('')
                    setConfirmPassword(e.target.value)
                }
            }

        } else if(e.target.type == 'text') {
            nameValue = e.target.value.trim();
            
            if(nameValue.length == 0) {
                setNameError('Name must not be empty!!!');
            } else {
                setNameError('')
                setName(e.target.value)
            }
        }

        return 'yes'
    };

    const disableBtn = ()=> {
        return Boolean(name) || Boolean(email) || Boolean(password) || Boolean(confirmPassword) ? false : true;
    };


    const signup = (e) => {
        e.preventDefault()

        const signUpData = {
            name,
            email,
            password,
            confirmPassword,
            purpose: 'signup'
        };

        dispatch(userAuth(signUpData));
    }

    return (

        <>
            <Navbar showForm />
            <div className="account">
                <form className="account-form" onSubmit={signup}>
                    <span className="account-icon"></span>
                    <div className="account-control">
                        <input type="text" placeholder="Name" className="account-input" id="exampleInputName1" onChange={(e)=> setName(e.target.value)} onBlur={ e => validateInput(e)} />
                        <label htmlFor="exampleInputName1" className="account-label">Name</label>
                    </div>
                    <div className="account-input-error">{nameError}</div>
                    <div className="account-control">
                        <input type="email" placeholder="Email" className="account-input" id="exampleInputEmail1" onChange={(e)=> setEmail(e.target.value)} onBlur={ e => validateInput(e)} />
                        <label htmlFor="exampleInputEmail1" className="account-label">Email address</label>
                    </div>
                    <div className="account-input-error">{emailError}</div>
                    <div className="account-control">
                        <input type="password" placeholder="Password" className="account-input" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)} onBlur={ e => validateInput(e)} />
                        <label htmlFor="exampleInputPassword1" className="account-label">Password</label>
                    </div>
                    <div className="account-input-error">{passwordError}</div>
                    <div className="account-control">
                        <input type="password" placeholder="Confirm Password" className="account-input" id="exampleInputConfirmPassword1" onChange={(e)=> setConfirmPassword(e.target.value)} onBlur={ e => validateInput(e)} />
                        <label htmlFor="exampleInputConfirmPassword1" className="account-label">Confirm Password</label>
                    </div>
                    <div className="account-input-error">{confirmPasswordError}</div>
                    <div className="account-control">
                        <button type="submit" className="account-btn" disabled={disableBtn()}>Sign Up</button>
                    </div>
                    <Link className="account-text" to="/login">Login</Link>
                </form>
            </div>
        </>
    );
}

export default SignUp;