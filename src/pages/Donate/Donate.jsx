
const Donate = () => {
    return (
        <div>
            <div>
                <h1 className="text-5xl font-bold text-center py-8">Monthly Donation</h1>
                <section className="p-6 bg-gray-800 text-gray-100">
	<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
		<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
			<span className="block mb-2 text-violet-400">Monthly Donation</span>
			<h1 className="text-5xl font-extrabold text-gray-50">Build it with Food Sharing</h1>
			<p className="my-8">
				<span className="font-medium text-gray-50">We invite you to join Food Sharing </span>and fight alongside us as we redistribute resources and power to end hunger. 
			</p>
			<form action="" className="self-stretch space-y-3"> 
				<div>
					<label className="text-sm sr-only">Your name</label>
					<input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ri border-gray-700" />
				</div>
				<div>
					<label className="text-sm sr-only">Email address</label>
					<input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ri border-gray-700" />
				</div>
				<div>
					<label className="text-sm sr-only">Donate Amount</label>
					<input id="lastname" type="text" placeholder="Donate Amount" className="w-full rounded-md focus:ring focus:ri border-gray-700 text-black" />
				</div>
				<button type="button" className="w-full py-2 font-semibold rounded bg-violet-400 text-gray-900">Donate</button>
			</form>
		</div>
		<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500" />
	</div>
</section>
            </div>
        </div>
    );
};

export default Donate;