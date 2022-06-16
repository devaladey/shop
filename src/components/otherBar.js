function OtherBar() {
    return ( 
        <nav className="navbar">
                <Link className="navbar__logo" to="/">Shoppie</Link>
                <form className="navbar__form" onSubmit={e=> e.preventDefault()}>
                    <input type="text" placeholder="Search..." onChange={(e) => setNavbarSearchTerm(e.target.value)} className="navbar__input" />
                    <button type="submit" 
                            className="navbar__btn" 
                            disabled={navbarSearchTerm && navbarSearchTerm.length == 0} 
                            onClick={()=> setSearchTerm(navbarSearchTerm)}>Search</button>
                </form>
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
                    <Link className='navbar__icon' data-item={userCart.length} to="cart"></Link>
                </div>
            </nav>
     );
}

export default OtherBar;