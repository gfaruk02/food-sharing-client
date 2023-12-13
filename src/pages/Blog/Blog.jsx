import { Link, useLoaderData } from "react-router-dom";
import BlogPost from "./BlogPost";


const Blog = () => {
    const blogs = useLoaderData()
    return (
        <div className="mt-5"> <div className="w-64 py-3  px-5 rounded-lg bg-green-800 text-xl text-white font-semibold"> <Link to='/addblog'> Create Blog Post</Link> </div>
        <div> 
            {
                blogs?.map(blog=><BlogPost key={blog._id} blog={blog} ></BlogPost> )
            }
        </div>
        </div>
    );
};

export default Blog;