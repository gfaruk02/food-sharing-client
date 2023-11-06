import { useLoaderData, useParams } from "react-router-dom";
// import useFoods from "../../Hooks/useFoods";
import { useEffect, useState } from "react";

const ViewDetails = () => {
    // const allFoods = useFoods();
    const allFoods = useLoaderData();
    const {_id} = useParams();
    const [food, setFood] = useState([]);
    useEffect(()=>{
        const foodItem = allFoods?.find(food=> food._id === _id)
        setFood(foodItem);
    },[_id,allFoods ])
    console.log(food);
    const {donator_name, donator_image, food_image, food_name, food_quantity, pickup_location, expired_datetime, additional_notes } = food;
    return (
        <div>
            {/* {foods.donator_email} */}
            {food_name
}
            <h1>Donor Information</h1>
            <p>Donator Name: {donator_name}</p> 
            <p>Location{ pickup_location}</p>
            <p>{donator_name}</p>
        </div>
    );
};

export default ViewDetails;