import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { userLogout } from '../redux/user/userActions';
import AlertBox from "./AlertBox"
import { SearchContext } from '../App';

function Navigation({showForm}) {
    const { setSearchTerm} = useContext(SearchContext);

    const [navbarSearchTerm, setNavbarSearchTerm] = useState('')

    const [displayDropDown, setDisplayDropDown] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)
    const userCart = useSelector(state => state.cart.cart)
    const navigate = useNavigate()



    useEffect(() => {
        setDisplayDropDown(false)
    }, [])

    const showDropDown = () => {
        setDisplayDropDown(!displayDropDown);
    };

    const logoutHandler = () => {
        dispatch(userLogout())
        setDisplayDropDown(false)
        navigate("/login")
    };

    return (
        <>
            {user.token && <AlertBox>Successfully logged in</AlertBox>}
            <nav className="navbar">
                <Link className="navbar__logo" to="/">Shoppie</Link>
                {   !showForm ?
                    <form className="navbar__form" onSubmit={e=> e.preventDefault()}>
                        <input type="text" placeholder="Search..." onChange={(e) => setNavbarSearchTerm(e.target.value)} className="navbar__input" />
                        <button type="submit" 
                                className="navbar__btn" 
                                disabled={navbarSearchTerm && navbarSearchTerm.length == 0} 
                                onClick={()=> setSearchTerm(navbarSearchTerm)}>Search</button>
                    </form> : null
                }
                <div className="navbar__right">
                    {
                        user && user.token ? (
                            <>
                                <button className='btn-profile'>
                                    <span className='btn-profile__text'>{user.name ? `Hi, ${user.name}` : 'no name'}</span>
                                    <span className='btn-profile__darr' onClick={showDropDown}></span>
                                </button>
                                <div className={displayDropDown ? "buts show" : "buts"}>
                                    <ul className="navbar__menu">
                                        <li className="navbar__item">
                                            <Link className="navbar__link" to="/profile" onClick={() => setDisplayDropDown(false)}>Profile</Link>
                                        </li>
                                        <li className="navbar__item">
                                            <Link className="navbar__link" to="/" onClick={logoutHandler}>Logout</Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <ul className="navbar__menu">
                                <li className="navbar__item">
                                    <Link className="navbar__link" to="/signup">SignUp</Link>
                                </li>
                                <li className="navbar__item">
                                    <Link className="navbar__link" to="/login">Login</Link>
                                </li>
                            </ul>
                        )
                    }
                    <Link className='navbar__icon' data-item={userCart.length} to="/cart"></Link>
                </div>
            </nav>
        </>
    );
}

export default Navigation;

