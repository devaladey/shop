import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/admin/SideBar";
import AdminNavbar from "../components/AdminNavbar";
import Toggler from "../components/Toggler";

function Admin() {

    const [showSideBar, setShowSideBar] = useState(true)

    const toggleSideBar = ()=> {
        setShowSideBar(!showSideBar)
    };

    return ( 
        <>
            <Toggler showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
            <SideBar showSideBar={showSideBar} />
            <div style={{  marginLeft: showSideBar ? "25rem" : "5rem", transition: "all .3s"}}>
                <AdminNavbar />
                <Outlet />
            </div>
        </>
     );
}

export default Admin;