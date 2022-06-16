import { Link } from "react-router-dom";

function EditProduct() {
    return (
        <div style={{ backgroundColor: "#eee", height: "100vh" }}>
            <div className="update-product">
                <Link to="/admin/product">Go To Product</Link>
                <h4>Update Product</h4>
                <button>Publish Now</button>
            </div>
            <form className="account-form">
                <div className="account-control">
                    <input type="text" placeholder="Product Title" className="account-input" id="productTitle" />
                    <label htmlFor="productTitle" className="account-label">Product Title</label>
                </div>
                <div className="account-control">
                    <input type="text" placeholder="Product Price" className="account-input" id="productPrice" />
                    <label htmlFor="productPrice" className="account-label">Product price</label>
                </div>
                <div className="account-control">
                    <input type="text" placeholder="Count In Stock" className="account-input" id="countInStock" />
                    <label htmlFor="countInStock" className="account-label">Count In Stock</label>
                </div>
                <div className="account-control">
                    {/* <input type="text" placeholder="Product Message" className="account-input" id="productMessage" /> */}
                    <textarea row="3" placeholder="Product Message" className="account-input" id="productMessage"></textarea>
                    <label htmlFor="productMessage" className="account-label">Product Message</label>
                </div>
                <div className="account-control">
                    <input type="url" placeholder="Image Url" className="account-input" id="imgUrl" />
                    <label htmlFor="imgUrl" className="account-label">Image Url</label>
                </div>
                <div className="account-control">
                    <input style={{height: "100%"}} type="file" className="account-input" id="inputFile" />
                </div>
            </form>
        </div>
    );
}

export default EditProduct;