import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const [manageFood, setManageFood] = useState();
    const url = `https://assignment-11-7-food-sharing-server.vercel.app/food?email=${user?.email}`
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                setManageFood(data)
            })
    }, [user, url])
    // console.log(manageFood);
    const handleDelete = (_id) => {
        // console.log(_id);

        //sweel alert
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foods/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = manageFood.filter(food => food._id !== _id);
                            setManageFood(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div className="my-20">
            <div className="overflow-x-auto ">
                <table className="table w-full mx-auto p-0 m-0">
                    {/* head */}
                    <thead>
                        <tr className="text-xs md:text-base font-semibold text-black p-0 m-0 ">
                            <th>SL.</th>
                            <th>Image</th>
                            <th>Food Name</th>
                            <th>Quantity</th>
                            <th>Pickup Location</th>
                            <th>Expired Date</th>
                            <th>Additional Notes</th>
                            <th></th>
                            <th className="col-span-3"> Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageFood?.map((food, index) => <tr key={index} className="hover:bg-green-300 text-xs md:text-[14px] " >

                                <td>{index + 1} </td>
                                <td>
                                    <img className="w-14 h-10 md:w-16 md:h-12 rounded-lg" src={food.food_image} />
                                </td>

                                <td>{food.food_name}</td>
                                <td>{food.food_quantity}</td>
                                <td>{food.pickup_location}</td>
                                <td>{food.expired_datetime}</td>
                                <td>{food.additional_notes}</td>
                                <td>
                                    {/* <button className="hover:bg-red-400 hover:text-white  p-5 rounded-lg text-red-500 font-bold">
                                        X
                                    </button> */}
                                    <button onClick={() => handleDelete(food._id)} className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
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
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageFood;


