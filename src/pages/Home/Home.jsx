import { useLoaderData } from "react-router-dom";
import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";


const Home = () => {
    const loadFoods = useLoaderData()
    const showDisplayFoods = loadFoods.slice(0, 6)
    console.log(loadFoods);
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl py-8 font-extrabold">Featured Foods</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                    {
                        showDisplayFoods.map(food => <FeaturedFoods key={food._id} food={food}></FeaturedFoods>)
                    }
                </div>
                <div className="text-center my-5">
                    <button className="text-white font-bold text-2xl hover:bg-green-400 bg-green-800 py-4 px-8 rounded-lg"> Show All Foods </button>
                </div>
            </div>
        </div>
    );
};

export default Home;