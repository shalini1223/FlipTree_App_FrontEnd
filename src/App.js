import React, { useState } from 'react';
import MatrimonyForm from './MatrimonyForm';
import Matrimony from './Matrimony';

function App() {
  const [otpSent, setOtpSent] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mobileNumber, setMobileNumber] = useState('');

  const handleLoginSubmit = () => {
    // Send the mobile number to the backend to generate OTP
    // Set otpSent to true after OTP generation request is successful
    setOtpSent(true);
  };

  const handleOtpSubmit = () => {
    // Send the OTP to the backend for verification
    // Set loggedIn to true after OTP verification is successful
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setOtpSent(false);
    setMobileNumber('');
  };

  return (
    <div>
      <h1>Matrimony App</h1>
      {!loggedIn && !otpSent && (
        <MatrimonyForm
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          handleLoginSubmit={handleLoginSubmit}
        />
      )}
      {otpSent && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <button onClick={handleOtpSubmit}>Submit OTP</button>
        </div>
      )}
      {loggedIn && <Matrimony handleLogout={handleLogout} />}
    </div>
  );
}

export default App;
