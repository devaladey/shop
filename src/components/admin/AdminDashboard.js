import BarChart from "./BarChart";

function AdminDashBoard() {
    return ( 
        <div className="dashboard-container">
            <h2 className="admin-h2">Dashboard</h2>
            <div className="cards">
                { [1,2,3].map(el=> {
                    return (
                        <div className="card" key={el}>
                            <span className="card-icon"><i className="fas fa-sack-dollar"></i></span>
                            <div className="card-text">
                                <h3>Total Sales</h3>
                                <p>$11193</p>
                            </div>
                        </div>
                    )
                })
                    
                }
            </div>
            <div className="dashboard-analytics">
                <div  className="analyticsBarChart"></div>
                <div  className="analyticsPieChart"></div>
            </div>
            <div className="dashboard-table">
                <h2>Latest Orders</h2>
                <table>
                    <thead>
                        <tr>
                            {false && [1,2,3,4,5].map(el => <th key={el}>TH</th>)}
                        </tr>
                    </thead>
                    <tbody>
                    {[1,2,3].map(el => <tr key={el}>
                            {/* {[1,2,3,4,5,6].map(el => <td key={el}>TD</td>)} */}
                            <td>Admin</td>
                            <td>admin@gmail.com</td>
                            <td>$200.25</td>
                            <td>Not  Paid</td>
                            <td>01/10/2022</td>
                            <td>eye icon</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default AdminDashBoard;