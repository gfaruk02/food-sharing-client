import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";


const AddBlogPost = () => {
    const { user } = useContext(AuthContext)
    const addHandleBlog = e => {
        e.preventDefault();
        const form = e.target;
        const date = form.datetime.value;
        const title = form.title.value;
        const text = form.text.value;
        const image = form.image.value;
        const readingTime = form.readingTime.value;


        const addblog = { readingTime, date, title, text, image, userName: user.displayName, userEmail: user.email, userImage: user.photoURL }
        console.log(addblog);
        if (user) {
            fetch('https://assignment-11-7-food-sharing-server.vercel.app/blog', {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(addblog)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Successfully!',
                            text: 'Your Food Added in Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok',

                        })
                        form.reset();
                    }
                })

        }
    }
    return (
        <div>
        <section className="p-6 bg-gray-800 text-gray-50">
            <form onSubmit={addHandleBlog} className=" flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-2 gap-6 p-6 rounded-md shadow-sm bg-gray-900 mx-auto">
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 mx-auto">
                    <div className="col-span-full sm:col-span-3">
                                <label className="text-sm">Date</label> <br />
                                <input required className="w-full text-gray-800 rounded" type="date" id="datetime" name="datetime" />
                            </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Blog Title </label>
                            <input name="title" type="text" placeholder="Blog Title" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Blog text </label>
                            <input name="text" type="text" placeholder="Blog text" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Blog Image Url</label>
                            <input name="image" type="text" placeholder="Blog Image Url" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm"> Reading Time</label>
                            <input name="readingTime" type=" text" placeholder=" Reading Time" className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Your Name</label>
                            <input name="userName" type="text" value={user.displayName} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Your Image </label>
                            <input name="userImage" type="text" value={user.photoURL} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label className="text-sm">Your Email</label>
                            <input name="userEmail" type="text" value={user.email} className="w-full py-2 pl-2 rounded-md focus:ring focus:ri focus:ri border-gray-700 text-gray-900" disabled />
                        </div>
                        <div className=" col-span-full">
                            <button className="w-full py-2 border  hover:bg-green-400 bg-green-800 border-white pl-2 rounded-md focus:ring focus:ri focus:ri font-bold">
                                <input name="" type="submit" value="Submit" />
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    </div>
);
};

export default AddBlogPost;