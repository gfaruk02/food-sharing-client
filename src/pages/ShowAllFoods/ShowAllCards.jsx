import PropTypes from 'prop-types';

const ShowAllCards = ({showFood}) => {
    const { food_image, food_name, food_quantity, pickup_location, expired_datetime, additional_notes } =  showFood
    return (
        <div>
            <div className="max-w-md rounded-md shadow-md bg-gray-900 text-gray-100">
	<img src={food_image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
	<div className="flex flex-col justify-between p-4 space-y-6">
		<div className="space-y-2">
			<h2 className="text-xl font-semibold tracki">Name : {food_name}</h2>
			<div className='text-base'>
			<p className="text-gray-100">Quantity: {food_quantity}</p>
			<p className="text-gray-100">Pickup Location: {pickup_location}</p>
			<p className="text-gray-100"> Expired Date: { expired_datetime}</p>
			<p className="text-gray-100"> Notes: {
			additional_notes.length > 45 ? <span>{additional_notes.slice(0, 45)}</span> : <span>{additional_notes}</span>
			}</p>
			</div>
		</div>
		<button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-violet-400 text-gray-900">View Detail</button>
	</div>
</div>
        </div>
    );
};

export default ShowAllCards;
ShowAllCards.propTypes = {
	showFood: PropTypes.node
}