import { Link } from "react-router-dom";

function SideBar({showSideBar}) {
    return ( 
        <>
            <aside className={ showSideBar ? "sidebar" : "sidebar sidebar-active"} style={{display: showSideBar ? "flex" : "none"}}>
                <img className="sidebar-image" src="/download.jpg" alt="Admin Avatar" />
                <ul className="sidebar-menu">
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/dashboard"><i className="sidebar-icon fas fa-home"></i>Dashboard</Link></li>
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/product"><i className="sidebar-icon fa fa-shopping-bag" aria-hidden="true"></i>Products</Link></li>
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/product"><i className="sidebar-icon fas fa-cart-arrow-down"></i>Add Product</Link></li>
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/user"><i className="sidebar-icon fa fa-user" aria-hidden="true"></i> User</Link></li>
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/order">Orders</Link></li>
                    <li className="sidebar-item"><Link className="sidebar-link" to="/admin/review">Reviews</Link></li>
                </ul>
            </aside>
        </>
     );
}

export default SideBar;