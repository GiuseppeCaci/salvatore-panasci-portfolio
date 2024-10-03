import React from "react";

const Loading = () => {
  return (
    <>
     <div className="h-base d-flex justify-content-center align-items-center">
  <div className="spinner-border" role="status" style={{ width: '4rem', height: '4rem' }}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </>
  );
};

export default Loading;
