import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Main/MainLayout';
import Home from '../Pages/Home';
import ErrorPage from '../Pages/ErrorPage';
import AddNewCoffee from '../Pages/AddNewCoffee';
import UpdateCoffee from '../Pages/UpdateCoffee';
import About from '../Pages/About';
import LearnMore from '../Components/LearnMore';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Users from '../Components/Users';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: '/addCoffee',
                element: <AddNewCoffee></AddNewCoffee>
            },
            {
                path: '/updateCoffee/:id',
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/users')
            },
            {
                path: '/learnMore',
                element: <LearnMore></LearnMore>
            }
        ]
    }
])

export default router;