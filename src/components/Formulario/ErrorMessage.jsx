import React from 'react';

const ErrorMessage = ({ message }) => {
  return <p className="text-red-400 font-medium text-xs">{message}</p>;
};

export default ErrorMessage;