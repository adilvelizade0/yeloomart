import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
      className="d-flex justify-content-center align-items-center"
    >
      <Oval
        height={70}
        width={70}
        color="#FDDA0D"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FDDA0D"
        strokeWidth={4}
        strokeWidthSecondary={4}
      />
    </div>
  );
};

export default Loader;
