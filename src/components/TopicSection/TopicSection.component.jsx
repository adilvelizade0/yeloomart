import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const TopicSection = ({ title, path }) => {
  return (
    <div className="d-flex justify-content-between align-items-center pt-3 pb-4">
      <h5
        style={{
          color: "#4a4a4a",
          fontSize: "1.2rem",
        }}
        className="fw-bold"
      >
        {title}
      </h5>
      <Link
        style={{
          fontSize: "14px",
        }}
        className="d-flex align-items-center"
        to={path}
      >
        <span className="me-1 fw-bold">Hamısına Baxın</span>
        <IoIosArrowForward size={16} />
      </Link>
    </div>
  );
};

export default TopicSection;
