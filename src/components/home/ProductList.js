import { Link } from "react-router-dom";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import StarRating from "../StarRating";
import Spinner from "../Spinner";
import { SearchContext } from "../../App";


function ProductList() {
    const {searchTerm} = useContext(SearchContext)

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('/api/v1/product')
            .then(res => {
                const allProducts = res.data.data.products
                setProducts(allProducts)
            })
            .catch(error => {
                console.log(error)
            });
    }, [])


    ////////////////////////////////////////////////////
    // The part i am working on!!!
    useEffect(() => {

        async function filterAndFetchProducts() {
            try {
                const res = await axios.get(`/api/v1/product/filter?searchTerm=${searchTerm}`);
                setProducts(res.data.data.filteredProducts)
            } catch (error) {
                console.log(error)
            }
        }

        if(searchTerm.length > 0) {
            filterAndFetchProducts();
        }

    }, [searchTerm])

    return (
        <section className="product">
            {products && products.length > 0 ?
                products.map(product => {
                    return (
                        <div className="product__card" key={product._id}>
                            <Link to={`products/${product._id}`} className="product__card-inner">
                                <div className="product__card-img">
                                    {/* <img src="/download.jpg" alt={product} /> */}
                                </div>
                                <div className="product__card-text">
                                    <h3 style={{ fontSize: "1.7rem" }}>{product.name}</h3>
                                    <StarRating rating={[1, 2, 3, 4, 5]} />
                                    <span className="product__card-textreview">{product.reviews && product.reviews.length} reviews</span>
                                    <p className="product__card-textprice">${product.price}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
                ) : (<Spinner />)}
        </section>
    );
}

export default ProductList;