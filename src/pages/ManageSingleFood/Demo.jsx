import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const ManageSingleFood = () => {
    const foods = useLoaderData();
    console.log(foods);
  

    const handleDeliverd = e => {
        const form = e.target;
        const status = form.status.value;
        const food = { status }
        // console.log(name,brand,type,price,description,rating,photo);
        console.log(food);

        fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foodRequests/${food.requistId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(food)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Successfully!',
                        text: 'Update Coffee Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
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
                            {/* <td>
                                <button className="hover:bg-red-400 hover:text-white p-2 rounded-lg text-red-500 font-bold">
                                    Delivered
                                    <input type="text" />
                                </button>
                            </td> */}

                            <td>
                                <form onSubmit={handleDeliverd}>
                                    <label className="input-group">
                                        {/* <input defaultValue="Delivered" type="text" name="status" className="input input-bordered w-full" /> */}
                                        <button> Delivered</button>

                                    </label>
                                </form>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageSingleFood;