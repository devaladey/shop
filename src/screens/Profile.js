import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"
import AlertBox from "../components/AlertBox";

function Account() {

    const user = useSelector(state=> state.user.user)
    const navigate = useNavigate()

    useEffect(()=> {
        if(!user.token) {
            navigate("/")
        }
    }, [user.token])
    
    const [tab, setTab] =useState("profile")

    return ( 
        <section className="profile">
            <div className="profile-card">
                <div className="profile-card__avatar">
                    { true ? <img src="/download.jpg" alt="Avatar" className="profile-card__avatar-img" /> : <span className="profile-card__avatar-icon"></span>}
                </div>
                <ul className="profile-menu">
                    <li className="profile-item profile-item--first">
                        <h3 className="profile-name">{user.name}</h3>
                        <p className="profile-date">Joined January 4, 2022</p>
                    </li>
                    <li className="profile-item profile-item--second" onClick={()=> setTab('profile')}>
                        Profile Settings
                    </li>
                    <li className="profile-item profile-item--third" onClick={()=> setTab('order')}>
                        Orders List
                        <span className="profile-icon">!</span>
                    </li>
                </ul>
            </div>
            {
                tab == 'profile' ? (
                        <form className="profile-form">
                            <div className="account-control">
                                <input type="text" placeholder="Name" className="account-input" id="exampleInputName1" />
                                <label htmlFor="exampleInputName1" className="account-label">Name</label>
                            </div>
                            <div className="account-control">
                                <input type="email" placeholder="Email" className="account-input" id="exampleInputEmail1" />
                                <label htmlFor="exampleInputEmail1" className="account-label">Email address</label>
                            </div>
                            <div className="account-control">
                                <input type="password" placeholder="Password" className="account-input" id="exampleInputPassword1" />
                                <label htmlFor="exampleInputPassword1" className="account-label">Password</label>
                            </div>
                            <div className="account-control">
                                <input type="password" placeholder="Confirm Password" className="account-input" id="exampleInputConfirmPassword1" />
                                <label htmlFor="exampleInputConfirmPassword1" className="account-label">Confirm Password</label>
                            </div>
                            <div className="account-control">
                                <button type="submit" className="account-btn">Update Profile</button>
                            </div>
                        </form>
                    ) : (
                        <table className="order-table">
                            <tr className="order-table-row">
                                <th className="order-table-heading">Id</th>
                                <th className="order-table-heading">Status</th>
                                <th className="order-table-heading">Date</th>
                                <th className="order-table-heading">Total</th>
                            </tr>
                            {
                                [1,2].map(el=> (
                                    <tr key={el} className={+el % 2 == 0 ? "order-table-row order-table-row-success" : "order-table-row order-table-row-danger"}>
                                        <td className="order-table-data">12345678912345</td>
                                        <td className="order-table-data">Paid</td>
                                        <td className="order-table-data">Today</td>
                                        <td className="order-table-data">$234</td>
                                    </tr>
                                ))
                            }
                        </table>
                    
                    )
            }

            <AlertBox>Success</AlertBox>
        </section>
     );
}

export default Account;