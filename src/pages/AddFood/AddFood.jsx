import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
    const {user} = useContext(AuthContext)
    const statuss = 'Available';
    const handleAddFood = e =>{
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.photo.value;
        const food_quantity = form.foodQuantity.value;
        const pickup_location = form.location.value;
        const expired_datetime = form.date.value;
        const additional_notes = form.notes.value;
        const status = form.status.value;


        const addFoodInfo = {food_name, food_image, food_quantity, pickup_location, expired_datetime, additional_notes, status ,   donator_name: user.displayName,   donator_email: user.email,  donator_image: user.photoURL }
        console.log(addFoodInfo);
        if (user) {
            fetch('http://localhost:5000/foods', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(addFoodInfo)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Your Food Added in Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok',

                        })
                    }
                })
                
        }
    }
    return (
        <div>
            <section className="p-6 bg-gray-800 text-gray-50">
                <form onSubmit={handleAddFood} className=" flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-900 mx-auto">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto">
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Food Name</label>
                                <input name="foodName" type="text" placeholder="Food Name" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Food Image Url</label>
                                <input name="photo" type="text" placeholder="Food Image Url" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm"> Food Quantity</label>
                                <input name="foodQuantity" type=" text" placeholder=" Food Quantity" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm"> Pickup Location</label>
                                <input name="location" type="text" placeholder="Pickup Location" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm"> Expired Date</label>
                                <input name="date" type="text" placeholder="Expired Date" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">  Food Status</label>
                                <input name="status" type="text" value={statuss} placeholder="Available" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled/>
                            </div>
                            <div className="col-span-full">
					<label  className="text-sm"> Additional Notes</label>
					<input name="notes" type="text" placeholder=" Additional Notes" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri text-black" />
				</div>
                            {/* <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">  Additional Notes</label>
                                <input name="notes" type="text" placeholder=" Additional Notes" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div> */}


                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Donator Name</label>
                                <input name="donatorName" type="text" value={user.displayName} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Donator Photo</label>
                                <input name="donatorPhoto" type="text" value={user.photoURL} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Donator Email</label>
                                <input name="donatorEmail" type="text" value={user.email} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                            </div>
                            {/* <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Donator Email</label>
                                <input name="" type="text" value={} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div> */}
                            {/* <div className="col-span-full sm:col-span-2">
                                <label className="text-sm">Food Status</label>
                                <input name="status" type="text" placeholder="available" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                            </div> */}
                            <div className=" col-span-full">
                                <button className="w-full py-2 border border-white pl-2 rounded-md focus:ring focus:ri focus:ri bg-lime-600">
                                    <input name="" type="submit" value="Submit" />
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};

export default AddFood;