import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>

            <main className=''>
                <Outlet></Outlet>
            </main>

            <footer>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;