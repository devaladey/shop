function Toggler({ showSideBar, toggleSideBar}) {
    return ( 
        <div onClick={toggleSideBar} className={ showSideBar ? "toggler" : "toggler toggler-active"}>
            { showSideBar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
     );
}

export default Toggler;