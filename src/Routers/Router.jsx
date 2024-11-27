import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Main/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import AddNewCoffee from '../Pages/AddNewCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addCoffee',
                element: <AddNewCoffee></AddNewCoffee>
            },
            {
                path: '/updateCoffee',
                element: <UpdateCoffee></UpdateCoffee>
            },
        ]
    }
])

export default router;