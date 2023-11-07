import { useLoaderData } from "react-router-dom";


const ManageSingleFood = () => {
    const manageFood = useLoaderData();
    const {userName} = manageFood;
    console.log(manageFood);
    return (
        <div>
            <h1>manage food</h1>
            <p>{userName}</p>
        </div>
    );
};

export default ManageSingleFood;