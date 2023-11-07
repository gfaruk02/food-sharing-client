import { useLoaderData } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const ManageSingleFood = () => {
    const foods= useLoaderData();

    const {user} = useContext(AuthContext);
    const [manageSingleFood, setManageSingleFood] = useState([]);
    // const url= `http://localhost:5000/foodreruest?email=${user?.email}`
    // useEffect(()=>{
    //     fetch(url, {credentials: 'include'})
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setManageSingleFood(data)
    //     })
    // },[user, url])

    useEffect(() => {
        const foodItem = foods?.find(food => food.donatorEmail === user?.email)
        setManageSingleFood(foodItem);
    }, [foods, user?.email])
    // const {userName} = manageSingleFood;
    console.log(manageSingleFood);
    return (
        <div className="my-20">
        <div className="overflow-x-auto ">
            <table className="table w-full mx-auto p-0 m-0">
                {/* head */}
                <thead>
                    <tr className="text-xs md:text-base font-semibold text-black p-0 m-0 ">
                       
                        <th>Requester Image</th>
                        <th>Requester Name</th>
                        <th>Requester Email</th>
                        <th>Request Time and Date</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
      
                        
                        <tr>

                            
                            <td>
                                <img className="w-14 h-10 md:w-16 md:h-12 rounded-lg" src={manageSingleFood.userImage} />
                            </td>

                            <td>{manageSingleFood.userName}</td>
                            <td>{manageSingleFood.email}</td>
                            <td>{manageSingleFood.time}</td>
                            <td>{manageSingleFood.status}</td>
                            {/* <td> */}
                                {/* <button className="hover:bg-red-400 hover:text-white  p-5 rounded-lg text-red-500 font-bold">
                                    X
                                </button> */}
                                {/* <button onClick={() => handleDelete(food._id)} className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                    X
                                </button>
                            </td>
                            <td>
                            <Link to={`/updatefood/${food._id}`}>
                                <button className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                Edit
                                </button>
                                </Link>
                            </td>
                            <td>
                            <Link to={`/managesinglefoods/${food._id}`}>
                                <button className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                Manage
                                </button>
                                </Link>
                            </td> */}
                        </tr>
                  
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageSingleFood;