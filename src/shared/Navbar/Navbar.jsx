import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handlesignOut =()=>{
    signOutUser()
      .then(()=> console.log('User LogOut Success'))
      .catch(error=> console.error(error))
  }
  const navLinks = <>
    <li className=" font-semibold text-base">
      <NavLink
        to="/"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "bold",
            color: isPending ? "white" : "",
            backgroundColor: isActive ? "green" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Home
      </NavLink>
    </li>
    <li className=" font-semibold text-base">
      <NavLink
        to="/login"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "bold",
            color: isPending ? "white" : "",
            backgroundColor: isActive ? "green" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Login
      </NavLink>
    </li>
    <li className=" font-semibold text-base">
      <NavLink
        to="/register"
        style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "bold",
            color: isPending ? "white" : "",
            backgroundColor: isActive ? "green" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        Register
      </NavLink>
    </li>
  </>

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to='/'>
            <img className="w-20 h-12" src="https://i.ibb.co/xgz0HsN/food-sharing.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        {/* user Profile */}
        { user ? <div className="dropdown dropdown-end ml-32">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60">
            <li>
              <a className="justify-between">
                {user.displayName}
              </a>
            </li>
            <li><a>{user.email}</a></li>
            <li><button onClick={handlesignOut}>Sign Out</button></li>
          </ul>
        </div>
        :
        <Link to='/login'>
    <button className="ml-32 bg-green-700 rounded-lg hover:bg-green-400 text-white font-semibold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base">Login</button>
        </Link>
        }
        {/* {
    user ? <>
      <div className="dropdown dropdown-end ">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-green-200 rounded-box w-60">
        <li>
          <a className="justify-between">
            {user.displayName}
          </a>
        </li>
        <li><a>{user.email} </a></li>
        <li> <button onClick={handleSignOut}>Sign Out</button></li>
      </ul>
    </div>
    </> 
    : 
    <Link to='/login'>
    <button className=" bg-green-700 rounded-lg hover:bg-green-400 text-white font-semibold py-1 px-2 md:py-2 md:px-4 text-sm md:text-base">Login</button>
  </Link>

} */}
      </div>
    </div>
  );
};

export default Navbar;