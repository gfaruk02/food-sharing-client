// import 'daisyui';
import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/login.svg'
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { signInUser, gooleSignIn } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then(result => {
        console.log(result);
        e.target.reset();
        navigate('/')
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your email and password do not match. Please try again',
        })
      })

  }
  const handleGoolgeLogin = () => {
    gooleSignIn()
      .then(result => {
        console.log(result);
        navigate('/')
      })
      .catch(error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Your email and password do not match. Please try again',
        })
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className='w-1/2 mr-8'>
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="email" placeholder="email" className="input input-bordered" required />
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-3 text-base">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div>
            <button className='text-base pl-9 mb-3 ' onClick={handleGoolgeLogin}>
              Google Login
            </button>

          </div>
          <div className='text-base pl-9 mb-5 '>
            <p>Do not Have an Account? Please <Link to='/register' className='text-green-700 font-bold'> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;