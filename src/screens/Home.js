import { useSelector } from 'react-redux';
import CallToAction from '../components/home/CallToAction';
import ProductList from '../components/home/ProductList';
import Navbar from '../components/Navbar';
import ContactBar  from '../components/ContactBar'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function HomeScreen() {

    const navigate =  useNavigate()
    const user = useSelector(state=> state.user.user)

    console.log(user)

    useEffect(()=> {

        if(user.isAdmin) {

            console.log(user)

            navigate("/admin/dashboard", {replace: true})
        }
    }, [])

    return (
        <>
            <ContactBar />
            <Navbar />
            <ProductList />
            <CallToAction />
        </>
    );
}

export default HomeScreen;