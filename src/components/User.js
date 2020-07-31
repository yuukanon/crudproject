import React from 'react';

const User = ({ userInfo, handleDelete }) => {
  return(
    <>
      <div>{userInfo.name}</div>
      <button onClick={() => handleDelete(userInfo.id)}>Remove user</button>
    </>
  )
}

export default User;