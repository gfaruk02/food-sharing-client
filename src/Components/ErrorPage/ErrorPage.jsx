
import { NavLink } from 'react-router-dom';
import img from '../../assets/error.png'


const ErrorPage = () => {
    return (
        <div className='mx-auto w-3/4 text-center mt-6'>
            <h1 className="text-3xl md:text-5xl pb-5 text-red-700 te">Oops! You`re lost.</h1>
            <img className='w-3/4 mx-auto' src={img} alt="" />
            <p className="text-xl md:text-2xl pb-2 mt-6">The page you were looking for does not exist</p>
            <NavLink to="/"> <button className="mt-5  py-3 px-6 hover:bg-blue-500 bg-blue-700 rounded-md text-xl font-semibold text-white" >Go Home</button></NavLink>
        </div>

    );
};

export default ErrorPage;