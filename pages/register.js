import React from 'react';

const RegisterPage = () => {
  const handlePayment = () => {
    alert('go to handle payemnt!');
  };
  return (
    <div>
      <h1>Register</h1>
      <p>
        If you want to start, the cost for the whole month of being part of this
        community is 44usd.
      </p>
      <button className='btn-payment' onClick={handlePayment}>
        Pay
      </button>
    </div>
  );
};

export default RegisterPage;
