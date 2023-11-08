import { useEffect, useState } from "react";


const useFoods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-11-7-food-sharing-server.vercel.app/foods')
        .then(res=>res.json())
        .then(data=> setFoods(data));
    },[])
    return foods
};

export default useFoods;