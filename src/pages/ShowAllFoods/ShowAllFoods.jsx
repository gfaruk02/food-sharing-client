// import { useLoaderFood } from "react-router-dom";

import { useState } from "react";
// import useFoods from "../../Hooks/useFoods";
import ShowAllCards from "./ShowAllCards";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";


const ShowAllFoods = () => {
    // const showAllFoods = useLoaderData()
    const foods = useLoaderData()
    const [foodItems, setfoodItems] = useState('')
    const [searchFood, setSearchFood] = useState(foods);

    const handleSearch = (e) => {
        const FoodFilter = foods?.filter((item) => item.food_name?.toLowerCase().includes(foodItems.toLowerCase()));
        setSearchFood(FoodFilter);
        e.preventDefault()
        setfoodItems('');
    }
    const [sortFoods, setsortFoods] = useState(false);
    const handlesortFoods = () => {
        // Toggle sorting
        setsortFoods(!sortFoods);
        const sortedFoods = [...searchFood].sort((a, b) => {
            return sortFoods
                ? Date.parse(a.expired_datetime) - Date.parse(b.expired_datetime)
                : Date.parse(b.expired_datetime) - Date.parse(a.expired_datetime);
        });
        setSearchFood(sortedFoods);
    };
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        // animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="mt-14"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-between p-4 bg-gray-900 rounded-t-lg"> 

            <form >
                            <div className="relative w-full lg:w-3/4 lg:ml-32 mt-5 ">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Food Name..." required
                                    value={foodItems}
                                    onChange={(e) => setfoodItems(e.target.value)}
                                />
                                <button onClick={handleSearch} type="submit" className="text-white absolute right-1 bottom-1.5 bg-[#FF444A] hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Search</button>
                            </div>
                        </form>

                        <div>
                    <button
                        onClick={handlesortFoods}
                        className="text-white bg-[#c48d8f] hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 w-full lg:w-3/4 px-5 py-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Sort by Expiry Date {sortFoods ? "↓" : "↑"}
                    </button>
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
            {
                searchFood?.map(food=> <ShowAllCards key={food._id} food={food}> </ShowAllCards>)
            }
        </div>
        </motion.div>
    );
};

export default ShowAllFoods;