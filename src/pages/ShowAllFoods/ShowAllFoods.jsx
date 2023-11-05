import { useLoaderData } from "react-router-dom";
import ShowAllCards from "./ShowAllCards";


const ShowAllFoods = () => {
    const showAllFoods = useLoaderData()
    return (
        <div>
            <h1>Foods All</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {
                showAllFoods.map(showFood=> <ShowAllCards key={showFood._id} showFood={showFood}> </ShowAllCards>)
            }
        </div>
        </div>
    );
};

export default ShowAllFoods;