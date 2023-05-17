import React from "react";
import NavbarWrapper from "./Navbar.styles.js";
import SearchBar from "./SearchBar/SearchBar.component.jsx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiMapPin } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAuthUser, useIsAuthenticated } from "react-auth-kit";

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const authUser = useAuthUser();

  const cart = useSelector((state) => state.cart);
  const cartCount = cart.cartItems.reduce((acc, item) => {
    return acc + item.count;
  }, 0);

  return (
    <NavbarWrapper className="sticky-top">
      <div className="container-fluid px-3">
        <div className="navbar-top py-2 py-lg-2">
          <div className="row justify-content-between justify-content-lg-center">
            <div className="col-10 col-lg-6 d-flex align-items-center">
              <SearchBar />
            </div>
            <div className="col-2 p-0 col-lg-4 d-flex justify-content-around align-items-center">
              <div className="d-flex d-lg-none justify-content-end align-items-center position-relative">
                <div
                  style={{
                    left: 20,
                  }}
                  className="cart-count-badge"
                >
                  <span>{cartCount > 0 ? cartCount : 0}</span>
                </div>
                <AiOutlineShoppingCart
                  onClick={() => {
                    navigate("/cart");
                  }}
                  size={28}
                  color="#28282B"
                />
              </div>
              <div className="add-address d-none d-lg-flex align-items-center">
                <HiMapPin size={30} color="#28282B" />
                <div className="ms-2">
                  <h6
                    style={{
                      color: "#28282B",
                      fontSize: "10px",
                    }}
                    className="fw-bold"
                  >
                    ÇATDIRILMA ÜNVANI
                  </h6>
                  <a
                    className=" text-decoration-underline fw-bold"
                    href="#"
                    style={{
                      fontSize: "11px",
                      color: "#B01E68",
                    }}
                  >
                    ƏLAVƏ ET
                  </a>
                </div>
              </div>
              <div className="add-profile d-none d-lg-flex align-items-center">
                <FaUser size={25} color="#28282B" />
                <div className="ms-2">
                  <h6
                    style={{
                      color: "#28282B",
                      fontSize: "10px",
                    }}
                    className="fw-bold"
                  >
                    ŞƏXSİ KABİNET
                  </h6>
                  <div>
                    {isAuthenticated() ? (
                      <Link
                        to={"/profile"}
                        style={{
                            fontSize: "11px",
                            color: "#B01E68",
                        }}
                        className=" text-decoration-underline fw-bold"
                      >
                        {authUser()?.username}
                      </Link>
                    ) : (
                      <>
                        <Link
                          className="text-decoration-underline fw-bold"
                          style={{
                            fontSize: "11px",
                            color: "#B01E68",
                          }}
                          to="/sign-up"
                        >
                          QEYDİYYAT
                        </Link>
                        <span style={{
                          color: "#B01E68",
                        }} className="mx-2">|</span>
                        <Link
                          className="text-decoration-underline fw-bold"
                          style={{
                            fontSize: "11px",
                            color: "#B01E68",
                          }}
                          to="/sign-in"
                        >
                          GİRİŞ
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="d-none d-lg-flex justify-content-end align-items-center position-relative">
                <div className="cart-count-badge">
                  <span>{cartCount > 0 ? cartCount : 0}</span>
                </div>
                <AiOutlineShoppingCart
                  onClick={() => {
                    navigate("/cart");
                  }}
                  style={{ cursor: "pointer" }}
                  size={30}
                  color="#28282B"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
