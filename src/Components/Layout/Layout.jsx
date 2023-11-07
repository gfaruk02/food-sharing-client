import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";
import { useEffect } from "react";
// import { document } from "postcss";

const Layout = () => {
    const loc = useLocation();
    console.log(loc.pathname);
    useEffect(()=>{
        console.log(loc.pathname);
        if(loc.pathname === '/'){
            console.log(loc.pathname);
            document.title = `Food-Sharing | home`;
        }
        else{
            document.title = `Food Sharing ${loc.pathname.replace('/', ' | ')}`
        }
    },[loc.pathname])
    return (
        <div className="w-full lg:w-[90%] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;