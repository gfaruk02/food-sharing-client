import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const FeaturedFoods = ({ food }) => {
	const {_id, donator_name, donator_image, food_image, food_name, food_quantity, pickup_location, expired_datetime, additional_notes } = food
	return (
		<div>
			<motion.div whileHover={{ scale: 1.1 }} className="max-w-md rounded-md shadow-md bg-gray-900 text-gray-100">
				<img src={food_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
				<div className="flex flex-col justify-between p-4 space-y-6">
					<div className="space-y-2">
						<div className='flex gap-2 items-center'>
							<img className='w-10 h-10 rounded-full' src={donator_image} alt="" />
							<p>{donator_name}</p>
						</div>
						<h2 className="text-xl font-semibold tracki">Name : {food_name}</h2>
						<div className='text-base'>
							<p className="text-gray-100">Quantity: {food_quantity}</p>
							<p className="text-gray-100">Pickup Location: {pickup_location}</p>
							<p className="text-gray-100"> Expired Date: {expired_datetime}</p>
							<p className="text-gray-100"> Notes: {
								additional_notes.length > 45 ? <span>{additional_notes.slice(0, 45)}</span> : <span>{additional_notes}</span>
							}</p>
						</div>
					</div>
					<Link to={`/viewDetails/${_id}`}>
					<button type="button" className="hover:bg-green-400 bg-green-800 text-white font-bold flex items-center justify-center w-full p-3 tracki rounded-md">View Detail</button>
					</Link>
				</div>
			</motion.div>
		</div>
	);
};

export default FeaturedFoods;
FeaturedFoods.propTypes = {
	food: PropTypes.node
}