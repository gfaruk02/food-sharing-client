import { useContext, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import AuthProvider, { AuthContext } from "../../Components/Provider/AuthProvider";

const Table = ({ data, columns, onUpdate, onDelete }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
            <th>Actions</th> {/* Add Actions column for Update and Delete buttons */}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={row.original.id}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                );
              })}
              <td>
                <button onClick={() => onUpdate(row.original)}>Update</button>
                <button onClick={() => onDelete(row.original)}>Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const App = ({children}) => {
  const { user } = useContext(AuthProvider)
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/foods?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [user]);

  const columns = [
    {
      Header: 'Food Name',
      accessor: 'food_name',
    },
    {
      Header: 'Food Quantity',
      accessor: 'food_quantity',
    },
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
      <h1>Food Table</h1>
      <Table data={data} columns={columns} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default App;
