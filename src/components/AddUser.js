import React, { useState } from 'react';

const AddUser = ({ addingUser }) => {
   const [name, setName] = useState('')

   const handleChange = (e) => {
    setName(e.target.value)
   }

   const handleClick = () => {
     addingUser(name);
     setName('')
   }

  return(
    <>
      <input onChange = {handleChange} type="text" name="user" value={name}/>
      <button onClick = {handleClick}>add user</button>
    </>
  )
}

export default AddUser;