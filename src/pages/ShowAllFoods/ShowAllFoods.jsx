// import { useLoaderData } from "react-router-dom";

import useFoods from "../../Hooks/useFoods";
import ShowAllCards from "./ShowAllCards";


const ShowAllFoods = () => {
    // const showAllFoods = useLoaderData()
    const foods = useFoods();
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {
                foods?.map(food=> <ShowAllCards key={food._id} food={food}> </ShowAllCards>)
            }
        </div>
        </div>
    );
};

export default ShowAllFoods;