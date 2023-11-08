import { useLoaderData } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { AuthContext } from "../../Components/Provider/AuthProvider";


const ManageSingleFood = () => {
    const foods= useLoaderData();
    console.log(foods);
    // const { _id } = useParams();
    // console.log(_id);
    // const {user} = useContext(AuthContext);
    // const [manageSingleFood, setManageSingleFood] = useState([]);
    // const url= `https://assignment-11-7-food-sharing-server.vercel.app/foodreruest?email=${user?.email}`
    // useEffect(()=>{
    //     fetch(url, {credentials: 'include'})
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setManageSingleFood(data)
    //     })
    // },[user, url])

    // useEffect(() => {
    //     // const foodItem = foods?.find(food => food.donatorEmail === user?.email)
    //     const foodItem = foods?.find(food => food._id === _id)
    //     console.log('food item', foodItem);
    //     setManageSingleFood(foodItem);
    // }, [foods, _id])
    // const {userName} = manageSingleFood;
    // console.log(manageSingleFood);
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
                                <img className="w-14 h-10 md:w-16 md:h-12 rounded-lg" src={foods.userImage} />
                            </td>

                            <td>{foods.userName}</td>
                            <td>{foods.email}</td>
                            <td>{foods.time}</td>
                            <td>{foods.status}</td>
                             <td>
                                 <button className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                 Delivered
                                </button>
                            </td>
                        </tr>
                  
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageSingleFood;