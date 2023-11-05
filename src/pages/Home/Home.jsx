import { useLoaderData } from "react-router-dom";
import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";


const Home = () => {
    const loadFoods = useLoaderData()
    const showDisplayFoods = loadFoods.slice(0, 6)
    console.log(loadFoods);
    return (
        <div>
            <div>
                <h1>Featured Foods</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                {
                    showDisplayFoods.map(food=> <FeaturedFoods key={food._id} food={food}></FeaturedFoods>)
                }
                </div>
                <button>Show All Foods</button>
            </div>
        </div>
    );
};

export default Home;