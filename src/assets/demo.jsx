import { useContext, useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const ManageSingleFood = () => {
    const {user} = useContext(AuthContext);
    // const loadfoods = useLoaderData();
    const [manageFood, setManageFood] = useState([]);
    useEffect(()=>{
        fetch(`https://assignment-11-7-food-sharing-server.vercel.app/foodRequests?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setManageFood(data)
        })
    },[user])
    console.log(manageFood.location);
    return (
        <div>
            <h1>Manage Single Food</h1>
            {
                manageFood.map(food=> <h1 key={food._id}> {food.name}</h1>
                    )
            }
        </div>
    );
};

export default ManageSingleFood;