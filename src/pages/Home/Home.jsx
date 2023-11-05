import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoods from "../../Components/FeaturedFoods/FeaturedFoods";

const Home = () => {
    const loadFoods = useLoaderData()
    const showDisplayFoods = loadFoods.slice(0, 6)
    console.log(showDisplayFoods._id);

    // console.log(loadFoods);
    return (
        <div>
            <div>
                <h1 className="text-center text-5xl py-8 font-extrabold">Featured Foods</h1>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
                    {
                        showDisplayFoods?.map(food => <FeaturedFoods key={food._id} food={food}></FeaturedFoods>)
                    }
                </div>
                <div className="text-center my-5">
                    <Link to='/showallfoods'>
                        <button className="text-white font-bold text-2xl hover:bg-green-400 bg-green-800 py-4 px-8 rounded-lg"> Show All Foods </button>
                    </Link>
                </div>
            </div>


            <div className="mt-16">
                <section className="bg-gray-800 text-gray-100 rounded-xl ">
                    <div className="container flex flex-col justify-center p-4 mx-auto lg:flex-row lg:justify-between">
                        <div className="h-full w-full">
                            <img src="https://i.ibb.co/dgf7tWT/d3.jpg" alt="" className=" rounded-xl" />
                        </div>
                        <div className="flex flex-col justify-center p-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                            <h1 className="text-5xl font-bold leadi "> Food Sharing Is </h1>
                            <h3 className="text-2xl pt-4 font-bold leadi " >Community Food Sharing and Surplus Reduction Platform</h3>

                            <p className="mt-6 mb-8 text-lg sm:mb-12">An initiative focused on reducing food waste and promoting food sharing within the community through a dedicated platform.
                            </p>
                            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Join Us</a>
                                <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">See Details</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <img src="https://i.ibb.co/j6M5dgM/WEBHERO-SFSJ-2023-1640x500-1.png" alt="" />

            </div>
            <section className="bg-gray-800 pb-3 rounded-xl">
	<div className="bg-violet-400 mx-6">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
			<h1 className="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl text-gray-900">Become a Food Sharing Monthly Sustainer Donor!</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Food First receives its funding from people just like you.  We dont accept corporate contributions or pursue government grants. This allows us to be a strong and independent voice that speaks truth to power! Advocating for food policy that is fair and equitable and enables nutritious and healthy food to be accessible and affordable, is what you have come to expect from Food First for nearly 50 years.</p>
			<div className="flex flex-wrap justify-center">
				<Link to='/donate'>
                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50">Get Donate</button>
                </Link>
			</div>
		</div>
	</div>
	<img src="https://i.ibb.co/WGMQ86v/d1.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-52 bg-gray-500" />
</section>
        </div>
    );
};

export default Home;