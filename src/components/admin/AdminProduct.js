import { Link } from "react-router-dom";

function AdminProduct() {
    return ( 
        <div className="product-container">
            <div className="product-container-top">
                <input type="text"  placeholder="Search..." />
                <select>
                    <option>All Category</option>
                    <option>Category</option>
                </select>
                <select>
                    <option>Latest Added</option>
                    <option>Category</option>
                </select>
            </div>
            <div className="product-container-list">
                {
                    [1,2,3,4,5,6,7,8,9,10].map(el=> {
                        return (
                            <div className="product-container-list-card" key={el}>
                                <div className="product-container-list-card-inner">
                                    <img src="/download.jpg" />
                                    <p>Minah mmassey </p>
                                    <p>$60</p>
                                    <div className="btn-group">
                                        <Link to="/admin/product/editProd"><i className="fas fa-pencil"></i></Link>
                                        <Link to="/admin/product/deleteProd"><i className="fas fa-trash-alt"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
     );
}

export default AdminProduct;