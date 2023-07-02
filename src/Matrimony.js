import React from 'react';

const Matrimony = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome to Matrimony Page</h2>
      {/* Add your matrimony form and content here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Matrimony;
