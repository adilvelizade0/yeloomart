import React from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const MobileNavigator = ({ name }) => {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        backgroundColor: "var(--red)",
        position: "relative",
      }}
      className="px-4 py-3 d-block d-lg-none"
    >
      <BiLeftArrowAlt
        onClick={() => {
          navigate("/");
        }}
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
        }}
        size={30}
        color="#000"
      />
      <h4 className="text-dark text-center">{name}</h4>
    </nav>
  );
};

export default MobileNavigator;
