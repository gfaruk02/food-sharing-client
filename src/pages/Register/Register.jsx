import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  // const [success, setSuccess] = useState()
  const { signUpUser } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // setSuccess('')
    if (!/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/.test(password)) {
      // setRegisterError('Password Minimum 6 characters, at least one uppercase letter, one number and one special character:');
      Swal.fire({
        title: 'Error!',
        text: 'Password Minimum 6 characters, at least one uppercase letter, one number and one special character:',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    else {
      signUpUser(email, password)
        .then(result => {
          console.log(result);
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'CONGRATULATIONS! You have now successfully registered! ',
            showConfirmButton: false,
            timer: 1500
          })
          //update user name and photo url
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          })
          e.target.reset();
          navigate('/');

        })
        .catch(error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'The email address is already in use. Please use a different email address',
          })
        })
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      {/* {
                success && <p> {success} </p>
            } */}
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
              <button className="btn btn-primary  hover:bg-green-400 bg-green-800 text-white font-bold">Register</button>
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