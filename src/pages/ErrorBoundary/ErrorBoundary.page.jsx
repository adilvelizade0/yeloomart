import React from "react";

const ErrorBoundary = () => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <h1>Sorry, something went wrong. Please try again later.</h1>
    </div>
  );
};

export default ErrorBoundary;
