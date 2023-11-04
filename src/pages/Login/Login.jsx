// import 'daisyui';
import { Link } from 'react-router-dom';
import img from '../../assets/login.svg'
const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className='w-1/2 mr-8'>
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className='text-base pl-9 mb-5 '>
            <p>Do not Have an Account? Please <Link to='/register' className='text-green-700 font-bold'> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;