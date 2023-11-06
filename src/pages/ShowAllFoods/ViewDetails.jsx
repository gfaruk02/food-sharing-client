import { Navigate, useLoaderData, useParams } from "react-router-dom";
// import useFoods from "../../Hooks/useFoods";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const ViewDetails = () => {
    // const allFoods = useFoods();
    const { user } = useContext(AuthContext)
    const allFoods = useLoaderData();
    const { _id } = useParams();
    const [food, setFood] = useState([]);

    useEffect(() => {
        const foodItem = allFoods?.find(food => food._id === _id)
        setFood(foodItem);
    }, [_id, allFoods])
    console.log(food);
    const {donator_name, donator_email, food_image, food_name, food_quantity, pickup_location, expired_datetime, additional_notes } = food;
    const d = new Date()
    let time = d.toLocaleDateString();
    const handleFoodReguest=(e)=>{
        e.preventDefault();
        const form = e.target;
        const time = form.time.value;
        const additional_notes = form.additional_notes.value;
        const money = form.money.value;

        const foodRequest = { id: _id, 
            name:food_name, 
            photo: food_image,
            donatorEmail:donator_email,
            donatorName: donator_name,
            userEmail: user.email,
            location: pickup_location,
            expired_datetime: expired_datetime,
            additional_notes,
            money,
            time

         };
        console.log(foodRequest);

        if (user) {
            fetch('http://localhost:5000/foodRequests', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(foodRequest)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Your Food Request Added in Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok',

                        })
                    }
                })
                
        }
        else {
            Navigate('/login')
        }
    }


    return (
        <div className="mt-10">
            <section className="py-6 bg-gray-500 text-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 px-10">
                    <p>Donator Name: {donator_name}</p>
                    <p>Food Pickup Location: {pickup_location}</p>
                </div>
                <div className="container mx-auto flex flex-col items-center justify-center max-w-lg p-4 lg:max-w-full lg:flex-row">
                    <div className="flex flex-col space-y-3 flex-1 p-4 pb-8 sm:p-8 lg:p-16 bg-gray-900 rounded-l-lg">
                        <h1 className="text-2xl font-bold text-left"> Food Name: {food_name}</h1>
                        <p className="text-xl font-bold text-left">Food Quantity: {food_quantity}</p>
                        <p className="text-xl font-bold text-left">Expired Date: {expired_datetime}</p>
                        <p className="font-semibold text-left">Additional Notes: {additional_notes}</p>
                        {/* <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-500 hover:bg-gray-400">Request Button
                        </button> */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="px-8 py-3 mt-6 text-lg font-semibold border rounded sm:mt-12 border-gray-500 hover:bg-gray-400" onClick={() => document.getElementById('my_modal_5').showModal()}>Request Food</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle text-black">
                            <div className="modal-box">
                                <form onSubmit={handleFoodReguest} className="space-y-3" method="dialog">
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Food Name:</span>
                                        <input type="text" name="name" value={food_name} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Food Image:</span>
                                        <input type="text" name="photo" value={food_image} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Food Id:</span>
                                        <input type="text" name="id" value={_id} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32"> Donator Email :</span>
                                        <input type="text" name="donatorEmail" value={donator_email} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32"> Donator Name:</span>
                                        <input type="text" name="donatorName" value={donator_name} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">User email:</span>
                                        <input type="email" name="userEmail" value={user.email} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Request Date:</span>
                                        <input type="text" name="time" value={time} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Pickup Location:</span>
                                        <input type="text" name="location" value={pickup_location} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Expire Date:</span>
                                        <input type="text" name="expired_datetime" value={expired_datetime} className="input input-bordered flex-1" disabled />
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Additional Notes:</span>
                                        <input type="text" name="additional_notes" placeholder="Additional Notes" className="input input-bordered flex-1" required/>
                                    </div>
                                    <div className="text-base font-semibold flex items-center">
                                        <span className="mr-1 w-32">Donation Money:</span>
                                        <input type="number" name="money" className="input input-bordered flex-1" required />
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Request</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <div className="flex-1 w-full rounded-md bg-violet-400 text-gray-900 ">
                        <img className="w-full rounded-r-lg" src={food_image} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ViewDetails;