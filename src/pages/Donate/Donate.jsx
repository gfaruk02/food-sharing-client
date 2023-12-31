
const Donate = () => {
	return (
		<div>
			<div className="w-full bg-gray-500 h-[500px]"
				style={{ backgroundImage: 'url(https://i.ibb.co/7KhXhyZ/d4.jpg)' }}>
				<div className="bg-gradient-to-r from-gray-400 h-full">

					<div className="px-10 lg:px-56 py-20 text-gray-950">
						<h1 className="text-3xl md:text-5xl antialiased font-bold leadi text-center ">Become a Food Sharing Monthly Sustainer Donor!</h1>
						<p className="pt-8 pb-8 text-base md:text-xl antialiased text-center font-semibold">For as little as $10 a month you can become a Food First Sustainer Donor! Doing so will help ensure Food First has the resources needed to plan ahead and accomplish even more in support of farmers, farmworkers, grassroots organizers, and activist researchers.  And your gift is also tax-deductible! Become a Food First Sustainer Donor today!</p>
					</div>
				</div>
			</div>
			<div>

				<section className=" mt-8 p-6 bg-gray-800 text-gray-100">

					<h1 className="text-5xl font-bold text-center py-8">Why Donate:</h1>

					<p>Empower Positive Change: Your donation directly contributes to our initiatives and projects that empower positive change in our community.
						Transform Lives: With your support, we can transform lives, provide opportunities, and create a brighter future for those in need.
						Sustainability: Donations help us sustain our programs and expand our reach, ensuring long-term impact.
						Ways to Give:</p>
					<br />
					<p> <span className="text-xl text-orange-400 font-bold pr-2">  One-Time Donation: </span> Make a one-time contribution to make an immediate impact.</p>
					<p> <span className="text-xl text-orange-400 font-bold pr-2"> Monthly Giving: </span>  Join our community of monthly donors to provide ongoing support.</p>
					<p> <span className="text-xl text-orange-400 font-bold pr-2"> In-Kind Donations: </span>  Donate goods or services that align with our mission.</p>
					<p> <span className="text-xl text-orange-400 font-bold pr-2"> Fundraise: </span>  Organize a fundraising event or campaign to involve your network in supporting our cause.</p>
				</section>

				<h1 className="text-5xl font-bold text-center py-8">Give Some Donation</h1>

				<section className="p-6 bg-gray-800 text-gray-100">
					<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
						<div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 bg-gray-900">
							<span className="block mb-2 text-violet-400"> Donation</span>
							<h1 className="text-4xl font-extrabold text-gray-50">Build it with Food Sharing</h1>
							<p className="my-8">
								<span className="font-medium text-gray-50">We invite you to join Food Sharing </span>and fight alongside us as we redistribute resources and power to end hunger.
							</p>
							<form action="" className="self-stretch space-y-3">
								<div>
									<label className="text-sm sr-only">Your name</label>
									<input id="name" type="text" placeholder="Your name" className="w-full py-2 rounded-md focus:ring focus:ri border-gray-700" />
								</div>
								<div>
									<label className="text-sm sr-only">Email address</label>
									<input id="lastname" type="text" placeholder="Email address" className="w-full py-2 rounded-md focus:ring focus:ri border-gray-700" />
								</div>
								<div>
									<label className="text-sm sr-only">Donate Amount</label>
									<input id="lastname" type="text" placeholder="Donate Amount" className="w-full py-2 rounded-md focus:ring focus:ri border-gray-700 text-black" />
								</div>
								<div>
									<label className="text-sm sr-only">Your Location</label>
									<input id="lastname" type="text" placeholder="Your Location" className="w-full py-2 rounded-md focus:ring focus:ri border-gray-700 text-black" />
								</div>
								<div>
									<label className="text-sm sr-only">Food Quintity</label>
									<input id="lastname" type="text" placeholder="Food Quintity" className="w-full py-2 rounded-md focus:ring focus:ri border-gray-700 text-black" />
								</div>
								<button type="button" className="w-full py-2 font-semibold rounded  hover:bg-green-400 bg-green-800 text-white">Donate</button>
							</form>
						</div>
						<img src="https://i.ibb.co/0GPRbT2/d8.jpg" alt="" className="object-cover w-full h-full rounded-md xl:col-span-3 bg-gray-500" />
					</div>
				</section>
			</div>
		</div>
	);
};

export default Donate;