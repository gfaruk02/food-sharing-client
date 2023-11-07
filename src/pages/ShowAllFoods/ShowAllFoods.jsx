// import { useLoaderData } from "react-router-dom";

import useFoods from "../../Hooks/useFoods";
import ShowAllCards from "./ShowAllCards";
import { motion } from "framer-motion";


const ShowAllFoods = () => {
    // const showAllFoods = useLoaderData()
    const foods = useFoods();
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        // animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="mt-14"
        >

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {
                foods?.map(food=> <ShowAllCards key={food._id} food={food}> </ShowAllCards>)
            }
        </div>
        </motion.div>
    );
};

export default ShowAllFoods;