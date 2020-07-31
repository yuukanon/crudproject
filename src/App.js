import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';

function App() {
  const [data, setData] = useState(null)


  const fetchUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(data => setData(data))
  }
  
  useEffect(fetchUsers, []);
    return (
      <div>
       {
         data.map(user => <User userInfo={user} key={user.id} />)
       }
      </div>
    );
}

  


export default App;
