
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/WGMQ86v/d1.jpg" className="w-full  rounded-xl" />
                <div className="absolute rounded-xl flex md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#9b6565] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 md:pl-28 pl-2 mt-10 md:mt-0 md:w-[60%]'>
                        <h2 className='text-5xl font-bold'>Donate Food Hare Today</h2>
                        <p>Food donation is a noble and compassionate act of giving surplus or unneeded food to individuals or organizations in need. It plays a crucial role in addressing issues such as hunger, food waste, and social inequalities. Heres some information about food donation:</p>
                        <div>
                            <button className="btn btn-primary ml-20 md:ml-0 px-20 mr-5">Donate</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/0GPRbT2/d8.jpg" className="w-full  rounded-xl" />
                <div className="absolute rounded-xl flex md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#b58c8c] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 md:pl-28 pl-2 mt-10 md:mt-0 md:w-[60%]'>
                        <h2 className='text-5xl font-bold'>Join with Food Sharing</h2>
                        <p>Food donation is a noble and compassionate act of giving surplus or unneeded food to individuals or organizations in need. It plays a crucial role in addressing issues such as hunger, food waste, and social inequalities. Heres some information about food donation:</p>
                        <div>
                            <button className="btn btn-primary ml-20 md:ml-0 px-20 mr-5">Join Us</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/dgf7tWT/d3.jpg" className="w-full  rounded-xl" />
                <div className="absolute rounded-xl flex md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#ce6666] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 md:pl-28 pl-2 mt-10 md:mt-0 md:w-[60%]'>
                        <h2 className='text-5xl font-bold'>Become a food donor.</h2>
                        <p>Our donor partners range from large food distributors to small mom-and-pop stores, restaurant chains, urban farms and many others! No matter how big or small the donor or donation, every partner has a significant impact.</p>
                        <div>
                            <button className="btn btn-primary ml-20 md:ml-0 px-20 mr-5">Donate</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/nQL1crZ/d5.jpg" className="w-full  rounded-xl" />
                <div className="absolute rounded-xl flex md:items-center h-full left-0 top-0 bg-gradient-to-r from-[#8b7575] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 md:pl-28 pl-2 mt-10 md:mt-0 md:w-[60%]'>
                        <h2 className='text-5xl font-bold'>Donate Food Hare Today</h2>
                        <p>Food donation is a noble and compassionate act of giving surplus or unneeded food to individuals or organizations in need. It plays a crucial role in addressing issues such as hunger, food waste, and social inequalities. Heres some information about food donation:</p>
                        <div>
                            <button className="btn btn-primary ml-20 md:ml-0 px-20 mr-5">Donate</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;