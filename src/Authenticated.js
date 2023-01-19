import React from 'react';

const Authenticated = (props) => {
  return (
    <div className="container">
      <div>
        <span>User Email: </span>
        <span>{props.user.email}</span>
      </div>

      <div>
        <span>User ID: </span>
        <span>{props.user.uid}</span>
      </div>
    </div>
  );
}

export default Authenticated;