import React, { useState } from "react";
import CartWrapper from "./Cart.styles.js";
import MobileNavigator from "../../components/MobileNavigator/MobileNavigator.component.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component.jsx";
import Navbar from "../../components/Navbar/Navbar.component.jsx";
import BottomBar from "../../components/BottomBar/BottomBar.component.jsx";
import { Checkbox } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart.actions.js";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import ShoppingSlider from "../../components/ShoppingSlider/ShoppingSlider.component.jsx";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const Cart = ({
  product = {
    id: 1,
    name: "Banana Kilo 1",
    price: 30,
    attribute: "1kg - 2kg",
    discount: 20,
    rating: 4,
    image:
      "https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp",
    count: 1,
  },
}) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const totalCount = cart.cartItems.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const productCount = cart.cartItems.find(
    (item) => item.id === product.id
  )?.count;
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleProductCount = (type) => {
    if (type === "add") {
      dispatch(
        addToCart({
          id: product.id,
          count: product.count,
        })
      );
      // setProductCount(productCount + 1);
    } else if (type === "remove") {
      if (productCount > 0) {
        dispatch(
          removeFromCart({
            id: product.id,
            count: product.count,
          })
        );
        // setProductCount(productCount - 1);
      }
    }
  };

  return (
    <CartWrapper>
      <div className="sticky-top">
        <div
          className="
        d-none d-lg-block
      "
        >
          <Navbar />
        </div>
        <MobileNavigator name="Səbət" />
        <Breadcrumb />
      </div>

      <main className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="box py-2 px-3 mb-2 ">
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        style={{
                          cursor: "pointer",
                          fontSize: "12px",
                        }}
                        className="text-muted"
                      >
                        <Checkbox shape="curve" color="danger-o">
                          HAMISINI SEÇ ({totalCount} MƏHSUL)
                        </Checkbox>
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          fontSize: "13px",
                        }}
                        className="trash d-flex text-muted justify-content-center align-items-center"
                      >
                        <FaTrashAlt className="me-1" />
                        Sİl
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="box p-3 mb-2">
                    {productCount > 0 && (
                      <div className="row">
                        <div className="col-8 col-lg-5">
                          <div className="d-flex align-items-center product-detail">
                            <Checkbox
                              style={{
                                fontSize: "13px",
                              }}
                              shape="curve"
                              color="danger-o"
                            ></Checkbox>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="img-fluid"
                              style={{
                                width: "90px",
                                height: "90px",
                                objectFit: "cover",
                              }}
                            />
                            <div className="ms-4">
                              <span
                                style={{
                                  fontSize: "15px",
                                  fontWeight: "600",
                                }}
                                className="d-block product-detail__name"
                              >
                                {product.name}
                              </span>
                              <span className="d-block text-muted">
                                {product.attribute}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-4 justify-content-end justify-content-lg-start col-lg-3 d-flex align-items-center">
                          <div className="d-flex justify-content-center flex-column ">
                            <span
                              style={{
                                color: "#b01e68",
                                fontSize: "24px",
                                fontWeight: "600",
                              }}
                              className="product-detail__price--new"
                            >
                              {(
                                product.price -
                                (product.price * product.discount) / 100
                              ).toFixed(2)}
                            </span>
                            <div
                              style={{
                                fontSize: "14px",
                                fontWeight: "500",
                              }}
                            >
                              <span
                                style={{
                                  textDecoration: "line-through",
                                }}
                                className="product-detail__price--old text-muted"
                              >
                                {product.price} AZN
                              </span>{" "}
                              <span className="product-detail__price--discount text-muted">
                                - 20%
                              </span>
                            </div>
                            <div>
                              <span className="text-muted">
                                {isFavorite ? (
                                  <AiFillHeart
                                    onClick={handleFavorite}
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    className="me-1 like"
                                  />
                                ) : (
                                  <AiOutlineHeart
                                    onClick={handleFavorite}
                                    style={{
                                      cursor: "pointer",
                                      fontSize: "20px",
                                    }}
                                    className="me-1 like"
                                  />
                                )}
                              </span>
                              <span className="text-muted trash">
                                <FaTrashAlt
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "17px",
                                  }}
                                  className="ms-2"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 mt-lg-0 col-12 col-lg-2 d-flex flex-column justify-content-center">
                          <div className="d-flex align-items-center justify-content-between w-100">
                            <button
                              onClick={() => handleProductCount("remove")}
                              className="add-to-cart-btn"
                            >
                              <BiMinus color="#D23F57" size={15} />
                            </button>
                            <h5 className="mx-4">{productCount}</h5>
                            <button
                              onClick={() => handleProductCount("add")}
                              className="add-to-cart-btn"
                            >
                              <IoMdAdd color="#D23F57" size={15} />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box p-3">
                <div className="d-flex flex-column justify-content-center">
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                    className="d-block"
                  >
                    Sifariş Məzmunu
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="text-muted">
                        Cəmi məbləğ ({totalCount} məhsul)
                      </span>
                      <span
                        style={{
                          color: "#b01e68",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        {productCount > 0
                          ? (
                              product.price * (productCount || 1) -
                              (product.price *
                                (productCount || 1) *
                                product.discount) /
                                100
                            ).toFixed(2)
                          : "0"}{" "}
                        AZN
                      </span>
                    </div>
                  </div>
                  <button
                    style={{
                      fontSize: "15px",
                    }}
                    disabled={productCount === 0}
                    className="add-to-cart-btn"
                    onClick={() => {
                      if (isAuthenticated()) {
                        if (productCount > 0) {
                          navigate("/checkout");
                        }
                      } else {
                        navigate("/sign-in");
                      }
                    }}
                  >
                    Ödənişi tamamlamaq
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-3 mb-5 pb-4">
            <div className="col-12">
              <ShoppingSlider
                topicTitle={"Ən çox satılanlar"}
                topicPath={"#"}
              />
            </div>
          </div>
        </div>
      </main>
      <BottomBar />
    </CartWrapper>
  );
};

export default Cart;
