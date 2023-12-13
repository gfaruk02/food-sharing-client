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
import Blog from './pages/Blog/Blog';
import AddBlogPost from './pages/Blog/AddBlogPost';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: ()=> fetch('https://assignment-11-7-food-sharing-server.vercel.app/foods')
      },
      {
        path: '/showallfoods',
        element: <ShowAllFoods></ShowAllFoods>,
        loader: () => fetch('https://assignment-11-7-food-sharing-server.vercel.app/foods')
      },
      {
        path: "/viewDetails/:_id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('https://assignment-11-7-food-sharing-server.vercel.app/foods')
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
        loader: ({ params }) => fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foods/${params.id}`)
      },
      {
        path: '/managesinglefoods/:requistId',
        element: <PrivateRoute> <ManageSingleFood></ManageSingleFood> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foodRequests/${params.requistId}`)
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
        path: '/blog',
        element: <Blog></Blog>,
        loader: () => fetch('https://assignment-11-7-food-sharing-server.vercel.app/blog')
      },
      {
        path: '/addblog',
        element:<AddBlogPost></AddBlogPost>
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