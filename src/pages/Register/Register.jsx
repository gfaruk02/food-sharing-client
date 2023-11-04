import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleRegister = e => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const password = form.password.value;
      console.log(name, email, photo, password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row">
            <div className='w-full ml-8'>
            <img src="https://i.ibb.co/xgz0HsN/food-sharing.png" alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input name='name' type="text" placeholder="Enter Your Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input name='photo' type="text" placeholder="Enter Your Photo Url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className='flex items-center relative'>
                    <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered w-full" required />
                    <span className=" absolute right-2" onClick={() => setShowPassword(!showPassword)}>
                      {
                        showPassword ? <FaEyeSlash className="  text-green-400 text-lg"></FaEyeSlash> : <FaEye className=" text-green-700 text-lg"></FaEye>
                      }
                    </span>
                  </div>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary">Register</button>
                </div>
              </form>
              <div className='text-base pl-9 mb-5 '>
                <p>You Have an Account? Please <Link to='/login' className='text-green-700 font-bold'> Log In </Link></p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Register;