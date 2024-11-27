import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Main/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router;