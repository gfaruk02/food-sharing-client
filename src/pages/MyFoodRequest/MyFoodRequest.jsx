import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";


const MyFoodRequest = () => {
    const {user} = useContext(AuthContext);
    const [myFoodRequest, setmyFoodRequest] = useState();
    const url= `https://assignment-11-7-food-sharing-server.vercel.app/foodreruest?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setmyFoodRequest(data)
        })
    },[user, url])
console.log(myFoodRequest);
const handleDelete = (_id) => {
    console.log(_id);

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
if(myFoodRequest.status.value === 'Delivered'){
alert('already delivered')
}
else{
    if (result.isConfirmed) {
        fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foodRequests/${_id}`, {
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
                    const remaining = myFoodRequest.filter(food => food._id !== _id);
                    setmyFoodRequest(remaining);
                }
            })
    }
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
                        <th>Donar Name</th>
                        <th>Pickup Location</th>
                        <th>Expire Date</th>
                        <th>Request Date</th>
                        <th>Donation Amount</th>
                        <th>Status</th>
                        <th className="col-span-3"> Action</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myFoodRequest?.map((food, index) => <tr key={index} className="hover:bg-green-300 text-xs md:text-[14px] " >

                            <td>{index + 1} </td>

                            <td>{food.donatorName}</td>
                            <td>{food.location}</td>
                            <td>{food.expired_datetime}</td>
                            <td>{food.time}</td>
                            <td>{food.money}</td>
                            <td>{food.status}</td>
                            <td>
                              
                                <button onClick={() => handleDelete(food._id)} className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                Cancel Request
                                </button>
                            </td>
                            {/* <td>
                              
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
                            </td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default MyFoodRequest;