import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import AddUser from './components/AddUser';

function App() {
  const [data, setData] = useState([])


  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setData(data))
  }
  
  useEffect(fetchUsers, []);

  const handleDelete = (id) => {
    setData(data.filter(user => user.id !== id))
  }

  const addingUser = (newUser) =>{
    setData([{ name: newUser }, ...data])
  }

    return (
      <div>
        <AddUser addingUser={addingUser} />
       {
         data.map((data, index )=> <User handleDelete={() => handleDelete(index)} userInfo={data} key={data.id} />)
       }
      </div>
    );
}

  


export default App;
