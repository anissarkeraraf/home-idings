import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto px-3 md:px-5 lg:px-0'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <div className='mt-10'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;