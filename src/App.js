import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import NotFound from './screens/NotFound';
import ProductDetail from './screens/ProductDetail';
import SignUp from './screens/SignUp';
import { Provider } from 'react-redux';
import CartList from './screens/CartList';
import Profile from './screens/Profile';
import store from './redux/store'
import { useState, createContext } from 'react';
import Admin from './screens/Admin';
import AdminProduct from './components/admin/AdminProduct';
import AdminUser from './components/admin/AdminUser';
import AdminOrder from './components/admin/AdminOrder';
import AdminReview from './components/admin/AdminReview';
import AdminDashBoard from './components/admin/AdminDashboard';
import EditProduct from './components/admin/EditProduct';
import DeleteProduct from './components/admin/DeleteProduct';


export const SearchContext = createContext()


function App() {

    const [searchTerm, setSearchTerm] = useState('')
    
    

    return (
        <BrowserRouter>
            <Provider store={store}>
                <SearchContext.Provider value={{searchTerm, setSearchTerm}}>
                    <Routes>
                        <Route path='/' element={<HomeScreen />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/signup' element={<SignUp />} />
                        <Route path='/cart' element={<CartList />} />
                        <Route path='/admin' element={<Admin />}>
                            <Route path='dashboard' element={<AdminDashBoard />} />
                            <Route path='product' element={<AdminProduct />} />
                            <Route path='product/editProd' element={<EditProduct />} />
                            <Route path='product/deleteProd' element={<DeleteProduct />} />
                            <Route path='user' element={<AdminUser />} />
                            <Route path='order' element={<AdminOrder />} />
                            <Route path='review' element={<AdminReview />} />
                        </Route>
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/products/:id' element={<ProductDetail />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </SearchContext.Provider>
            </Provider>
        </BrowserRouter>

    );
}

export default App;