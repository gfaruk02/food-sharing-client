import { useLoaderData, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const FoodItems = useLoaderData();
    const navigate = useNavigate()
    console.log(FoodItems);
    // console.log(FoodItems._id);
    const { _id, food_name, food_image, food_quantity, pickup_location, expired_datetime, additional_notes } = FoodItems;

    const handleUpdateFood = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.food_name.value;
        const food_image = form.food_image.value;
        const food_quantity = form.food_quantity.value;
        const pickup_location = form.pickup_location.value;
        const expired_datetime = form.expired_datetime.value;
        const additional_notes = form.additional_notes.value;
        const food = { food_name, food_image, food_quantity, pickup_location, expired_datetime, additional_notes,  }
        // console.log(name,brand,type,price,description,rating,photo);
        console.log(food);

        fetch(`http://localhost:5000/foods/${_id}`, {
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
                    navigate("/manageFood")
                }
                form.reset();
            })
    }
    return (
        <div className="mx-auto w-full md:w-3/4 mt-8 pt-4 rounded-lg bg-green-200">
            <h1 className='text-center text-3xl text-green-700 font-bold'> Update Food</h1>
            <form onSubmit={handleUpdateFood} className="w-3/4 mx-auto pt-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={food_name} type="text" name="food_name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Food Image Url</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={food_image} type="text" name="food_image" className="input input-bordered w-full" />
                        </label>
                    </div>
                 </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> Quantity</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={food_quantity} type="text" name="food_quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Pickup Location</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={pickup_location} type="text" name="pickup_location" className="input input-bordered w-full" />
                        </label>
                    </div>
                 </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 justify-center">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold"> expired_datetime</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={expired_datetime} type="text" name="expired_datetime" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">additional_notes</span>
                        </label>
                        <label className="input-group">
                            <input defaultValue={additional_notes} type="text" name="additional_notes" placeholder=" additional_notes" className="input input-bordered w-full" />
                        </label>
                    </div>
                 </div>



                <input className="btn btn-block my-10 bg-green-700  text-white hover:bg-green-500" type="submit" value="Update Food" />

            </form>
        </div>
    );
};

export default UpdateFood;