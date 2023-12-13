

const BlogPost = ({ blog }) => {
    const { date, userName, userImage, title, text, image, readingTime } = blog
    console.log(blog);
    return (
        <div>
            <div className="bg-gray-800text-gray-50">
                <div className="container grid grid-cols-12 mx-auto bg-gray-900 text-white my-7">
                    <div className="bg-no-repeat bg-cover col-span-full lg:col-span-4 pt-2">
                        <img className="w-full h-[270px]" src={image} alt="" />
                    </div>
                    <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                        <div className="flex justify-start">
                            <span className="px-2 py-1 text-xs rounded-full ">Post Date : {date} </span>
                        </div>
                        <h1 className="text-3xl font-semibold"> {title} </h1>
                        <p className="flex-1 pt-2"> {text} </p>
                        <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm ">
                            <span>Read more</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <div className="flex items-center justify-between pt-2">
                            <div className="flex space-x-2">
                                <img alt="" className="w-12 h-12 rounded-full ri ri dark:bg-gray-500 ri ri" src={userImage} />

                                <span className="self-center text-sm">by {userName}</span>
                            </div>
                            <span className="text-xs">{readingTime} min read</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;