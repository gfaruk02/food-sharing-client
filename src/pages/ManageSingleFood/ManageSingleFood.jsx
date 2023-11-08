import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ManageSingleFood = () => {
    const foods = useLoaderData();
    console.log(foods);

    const handleDeliverd = e => {
        e.preventDefault(); // Prevent the form from submitting by default
        const status = "Delivered"; // Hardcode the status to "Delivered"
        const food = { status };

        fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foodRequests/${foods._id}`, {
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
            <div className="overflow-x-auto">
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
                                <img className="w-14 h-10 md:w-16 md:h-12 rounded-lg" src={foods.userImage} alt="User" />
                            </td>
                            <td>{foods.userName}</td>
                            <td>{foods.email}</td>
                            <td>{foods.time}</td>
                            <td>{foods.status}</td>
                            <td>
                                <form onSubmit={handleDeliverd}>
                                    <button type="submit">Delivered</button>
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
