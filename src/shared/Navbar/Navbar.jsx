import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/xgz0HsN/food-sharing.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
        </div>
    );
};

export default Navbar;