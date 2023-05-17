import React from "react";
import SearchBarWrapper from "./SearchBar.styles.js";
import { BiSearch } from "react-icons/bi";
import logo from "../../../assets/logo/yeloomart-transparent.png";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <SearchBarWrapper className="d-flex align-items-center justify-content-center">
      <div className="logo-container">
        <img
          onClick={() => {
            navigate("/");
          }}
          width={35}
          height={35}
          src={logo}
          alt="brand-logo"
        />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Məhsulları, kateqoriyaları, brendləri axtarın..."
        />
      </div>
      <div className="icon-container">
        <BiSearch color="#202020" size={22} />
      </div>
    </SearchBarWrapper>
  );
};

export default SearchBar;
