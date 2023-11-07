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
import PrivateRoute from './Components/Routes/PrivateRoute';
import ViewDetails from './pages/ShowAllFoods/ViewDetails';
import AddFood from './pages/AddFood/AddFood';
import Table from './Components/Table/Table';
import ManageFood from './pages/ManageFood/ManageFood';
import UpdateFood from './pages/ManageFood/UpdateFood';
import ManageSingleFood from './pages/ManageSingleFood/ManageSingleFood';
import MyFoodRequest from './pages/MyFoodRequest/MyFoodRequest';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path:'/showallfoods',
        element:<ShowAllFoods></ShowAllFoods>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path:"/viewDetails/:_id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/foods')
      },
      {
        path: '/addfood',
        element: <PrivateRoute> <AddFood></AddFood> </PrivateRoute>
      },
      {
        path: '/managefood',
        element: <PrivateRoute> <ManageFood></ManageFood> </PrivateRoute>
      },
      {
        path: '/updatefood/:id',
        element: <PrivateRoute> <UpdateFood></UpdateFood> </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: '/managesinglefoods/:id',
        element: <PrivateRoute> <ManageSingleFood></ManageSingleFood> </PrivateRoute>,
        // loader: ({ params })=> fetch(`http://localhost:5000/foodRequests/${params.id}`)
        loader: ()=> fetch('http://localhost:5000/foodRequests')
      },
      {
        path: '/myfoodrequest',
        element: <PrivateRoute> <MyFoodRequest></MyFoodRequest> </PrivateRoute>
      },
      {
        path: '/donate',
        element: <PrivateRoute><Donate></Donate></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/table',
        element: <Table></Table>
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