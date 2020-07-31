import React from 'react';

const User = ({ userInfo }) => {
  return(
    <>
      <div>{userInfo.name}</div>
      <button>Remove user</button>
    </>
  )
}

export default User;