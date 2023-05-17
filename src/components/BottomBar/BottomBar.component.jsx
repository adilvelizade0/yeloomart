import { useState, useEffect } from "react";
import BottomNavigation from "reactjs-bottom-navigation";
import "reactjs-bottom-navigation/dist/index.css";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { TbCategory } from "react-icons/tb";
import BottomBarWrapper from "./BottomBar.styles.js";
import logo from "../../assets/logo/yeloomart-base-yellow-logo.png";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

const BottomBar = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const bottomNavItems = [
    {
      title: "Yeloomart",
      icon: (
        <img
          onClick={() => {
            navigate("/");
          }}
          width={25}
          src={logo}
          alt="logo"
        />
      ),
      activeIcon: (
        <img
          onClick={() => {
            navigate("/");
          }}
          width={25}
          src={logo}
          alt="logo"
        />
      ),
    },
    {
      title: "Kateqoriyalar",
      icon: (
        <TbCategory
          onClick={() => {
            navigate("/categories");
          }}
          color="rgb(102, 102, 102)"
          size={25}
        />
      ),
      activeIcon: <TbCategory color="#b01e68" size={25} />,
    },
    {
      title: "Səbət",
      icon: (
        <AiOutlineShoppingCart
          onClick={() => {
            navigate("/cart");
          }}
          color="rgb(102, 102, 102)"
          size={25}
        />
      ),
      activeIcon: <AiOutlineShoppingCart color="#b01e68" size={25} />,
    },
    {
      title: "Sevimlilər",
      icon: <AiOutlineHeart color="rgb(102, 102, 102)" size={25} />,
      activeIcon: <AiOutlineHeart color="#b01e68" size={25} />,
    },
    {
      title: "Profil",
      icon: (
        <CgProfile
          onClick={() => {
            navigate("/profile");
          }}
          color="rgb(102, 102, 102)"
          size={25}
        />
      ),
      activeIcon: <CgProfile color="#b01e68" size={25} />,
    },
  ];

  return (
    <BottomBarWrapper className="d-lg-none">
      <BottomNavigation
        style={{ backgroundColor: "#b01e68" }}
        items={bottomNavItems}
        defaultSelected={value}
        value={value}
        activeTextColor="#b01e68"
        activeBgColor="#fff"
        onItemClick={(item) => {
          setValue(item.id);
        }}
      />
    </BottomBarWrapper>
  );
};

export default BottomBar;
