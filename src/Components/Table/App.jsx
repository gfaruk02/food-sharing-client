import React from 'react';

const App = () => {
    return (
        <div>
            
        </div>
    );
};

export default App;


import { useContext, useEffect, useState } from 'react';
import Table from './Table';
import { AuthContext } from "../../Components/Provider/AuthProvider";

const App = () => {
    const {user} = useContext(AuthContext);
  const [data, setData] = useState
  useEffect(()=>{
    fetch(`http://localhost:5000/foods?email=${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setData(data)
    })
},[])

  const columns = [
    {
      Header: 'Product Name',
      accessor: 'name',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    // Add more columns as needed
  ];

  const handleUpdate = (product) => {
    // Implement update logic here
    console.log('Updating product:', product);
  };

  const handleDelete = (product) => {
    // Implement delete logic here
    console.log('Deleting product:', product);
  };

  return (
    <div>
      <h1>Product Table</h1>
      <Table data={data} columns={columns} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default App;
