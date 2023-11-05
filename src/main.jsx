import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ShowAllFoods from './pages/ShowAllFoods/ShowAllFoods';
import Donate from './pages/Donate/Donate';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path:'/showallfoods',
        element:<ShowAllFoods></ShowAllFoods>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path: '/donate',
        element: <Donate></Donate>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
    ]
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);