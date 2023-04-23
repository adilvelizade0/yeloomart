import React, { useState } from "react";
import ProductDetailWrapper from "./ProductDetail.styles.js";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { TbDiscount2 } from "react-icons/tb";
import { FiFilter } from "react-icons/fi";
import { BiMinus, BiSortAlt2, BiSupport } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { IoIosShareAlt, IoMdAdd } from "react-icons/io";
import { FaTruck } from "react-icons/fa";
import Rating from "react-rating";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ShoppingSlider from "../ShoppingSlider/ShoppingSlider.component.jsx";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../actions/cart.actions.js";

const ProductDetail = ({
  id,
  product = { count: 1, price: 30, discount: 20 },
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [rating, setRating] = useState(300);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const productCount = cart.cartItems.find((item) => item.id === id)?.count;

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleProductCount = (type) => {
    if (type === "add") {
      dispatch(
        addToCart({
          id: id,
          count: product.count,
        })
      );
      // setProductCount(productCount + 1);
    } else if (type === "remove") {
      if (productCount > 0) {
        dispatch(
          removeFromCart({
            id: id,
            count: product.count,
          })
        );
        // setProductCount(productCount - 1);
      }
    }
  };
  return (
    <ProductDetailWrapper>
      <div className="row">
        <div className="col-12 col-lg-8">
          <div className="product-detail-container shadow-sm h-100 w-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div className="col-lg-4 d-flex align-items-center justify-content-center">
                <div className="product-detail__image p-3 d-flex justify-content-center align-items-center">
                  <img
                    src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
                    alt="Məhsulun şəkili"
                    width="70%"
                  />
                </div>
              </div>
              <div className="col-lg-8 mt-lg-0">
                <div className="product-detail py-3 px-3">
                  <h4
                    style={{
                      fontWeight: "600",
                    }}
                    className="product-detail__title"
                  >
                    Banana Kilo 1
                  </h4>
                  <div className="product-detail__actions d-flex align-items-center justify-content-end">
                    <IoIosShareAlt color="#9e9e9e" className="me-3" size={30} />
                    {isFavorite ? (
                      <AiFillHeart
                        color="#d23f57"
                        size={30}
                        onClick={handleFavorite}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <AiOutlineHeart
                        color="#d23f57"
                        size={30}
                        onClick={handleFavorite}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                  <div className="product-detail__rating d-flex align-items-center">
                    <Rating
                      initialRating={3}
                      emptySymbol={<AiOutlineStar color="#faaf00" size={20} />}
                      fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                      readonly
                    />{" "}
                    <span className="ms-1 text-muted">({rating})</span>
                  </div>
                  <div className="product-detail__category pt-3 pb-1">
                    <span className="text-muted">Kateqoriya:</span>{" "}
                    <a href="#">Meyvələr</a>{" "}
                    <span className="text-muted">| Brend:</span>{" "}
                    <a href="#">Banana</a>
                  </div>
                  <hr />
                  <div className="product-detail__price pb-1">
                    <span
                      style={{
                        color: "var(--red)",
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                      className="product-detail__price--new"
                    >
                      {(
                        product.price * (productCount || 1) -
                        (product.price *
                          (productCount || 1) *
                          product.discount) /
                          100
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
                        {product.price * (productCount || 1)} AZN
                      </span>{" "}
                      <span className="product-detail__price--discount text-muted">
                        - 20%
                      </span>
                    </div>
                  </div>
                  <hr />
                  <div className="product-detail__attributes d-flex align-items-center">
                    <div
                      style={{
                        fontWeight: "500",
                      }}
                      className="product-detail__attribute d-flex flex-column me-5"
                    >
                      <span className="text-muted">
                        Ölçü haqqında məlumatlar:
                      </span>
                      <span>
                        1 kg <span className="text-muted">|</span> 2 kg
                      </span>
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      className="product-detail__attribute d-flex flex-column"
                    >
                      <span className="text-muted">İstehsalçı ölkə:</span>
                      <span>Azərbaycan</span>
                    </div>
                  </div>
                  <hr />
                  {productCount > 0 ? (
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleProductCount("remove")}
                        className="add-to-cart-btn"
                      >
                        <BiMinus color="#D23F57" size={20} />
                      </button>
                      <h4 className="mx-2">{productCount}</h4>
                      <button
                        onClick={() => handleProductCount("add")}
                        className="add-to-cart-btn"
                      >
                        <IoMdAdd color="#D23F57" size={20} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleProductCount("add")}
                      className="add-to-cart"
                    >
                      Səbətə əlavə et
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 mt-3 mt-lg-0">
          <div className="product-detail-container shadow-sm">
            <div className="product-detail__seller px-3">
              <ul className="list-unstyled mb-0">
                <li className="d-flex align-items-center justify-content-between border-bottom py-2">
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Barkod:
                  </span>
                  <span className="text-muted">1234567890123</span>
                </li>
                <li className="d-flex align-items-center justify-content-between border-bottom py-2">
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Brend:
                  </span>
                  <span className="text-muted">
                    <a
                      style={{
                        color: "var(--red)",
                      }}
                      href="#"
                    >
                      Banana
                    </a>
                  </span>
                </li>
                <li className="d-flex align-items-center justify-content-between border-bottom py-2">
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Ölkə:
                  </span>
                  <span className="text-muted">Azərbaycan</span>
                </li>
                <li className="d-flex align-items-center justify-content-between border-bottom py-2">
                  <span
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    Vendor kod:
                  </span>
                  <span className="text-muted">BD123456789</span>
                </li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#ecf0f1",
              }}
              className="product-detail__content mt-3 py-2 px-3"
            >
              <span className="text-muted">Məhsulun tərkibi:</span>{" "}
              <div className="mt-2">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: "#fff",
                    }}
                    className="tag py-1 px-3 border m-2 ms-0 mb-0 d-inline-block"
                  >
                    <span className="text-muted">Meyvə</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits mt-3">
              <ul className="list-unstyled mb-0 d-flex flex-column ps-3">
                <li className="d-flex align-items-center mb-3">
                  <FaTruck color="#ee4054" size={40} className="me-3" />
                  <div className="d-flex flex-column justify-content-center">
                    <span
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      <b>Pulsuz</b> çatdırılma
                    </span>
                    <span className="text-muted">
                      50 AZN üzrə sifarişlər üçün
                    </span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <BiSupport color="#ee4054" size={40} className="me-3" />
                  <div className="d-flex flex-column justify-content-center">
                    <span
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Dəstək xidməti 24/7
                    </span>
                    <span className="text-muted">Bizimlə əlaqə saxlayın</span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <TbDiscount2 color="#ee4054" size={40} className="me-3" />
                  <div className="d-flex flex-column justify-content-center">
                    <span
                      style={{
                        fontWeight: "500",
                      }}
                    >
                      Endirimlər
                    </span>
                    <span className="text-muted">
                      90 faizə qədər endirimlər
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div
            style={{
              backgroundColor: "#fafafa",
            }}
            className="p-3"
          >
            <h5>Məhsul təfərrüatları</h5>
          </div>
          <div className="product-detail-container shadow-sm px-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
              amet animi aperiam consectetur, consequatur culpa deserunt
              doloribus error exercitationem facilis iste molestias, pariatur
              perferendis quaerat repellendus rerum suscipit vel voluptas! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
              enim esse sint! Dolore ea facilis itaque iure non quam tempore
              vero? In molestiae numquam pariatur quo voluptatem! Maiores,
              perspiciatis, quidem.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <div
            style={{
              backgroundColor: "#fafafa",
            }}
            className="p-3"
          >
            <h5>Reytinqlər və Rəylər</h5>
          </div>
          <div className="product-detail-container shadow-sm px-3">
            <div className="product-detail__rating d-flex align-items-center">
              <div className="row align-items-center w-100">
                <div className="col-12 col-lg-2 ps-3">
                  <h1 className="d-flex align-items-end">
                    4.9{" "}
                    <span
                      style={{
                        fontSize: "24px",
                      }}
                      className="text-muted"
                    >
                      {" "}
                      / 5
                    </span>
                  </h1>
                  <div className="mt-3 d-flex flex-column">
                    <Rating
                      initialRating={3}
                      emptySymbol={<AiOutlineStar color="#faaf00" size={25} />}
                      fullSymbol={<AiFillStar color="#faaf00" size={25} />}
                      readonly
                    />{" "}
                    <span className="mt-1 text-muted">{rating} Reytinq</span>
                  </div>
                </div>
                <div className="col-12 col-lg-6 mt-3 mt-lg-0 ps-3 ps-lg-0">
                  <div className="d-flex align-items-center">
                    <div className="w-100 d-flex align-items-center">
                      <Rating
                        initialRating={5}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />

                      <div
                        style={{
                          width: "50%",
                        }}
                        className="ps-3"
                      >
                        <div
                          className="progress rounded-0"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "75%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-muted ms-3">200</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div className="w-100 d-flex align-items-center">
                      <Rating
                        initialRating={4}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />

                      <div
                        style={{
                          width: "50%",
                        }}
                        className="ps-3"
                      >
                        <div
                          className="progress rounded-0"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-muted ms-3">50</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div className="w-100 d-flex align-items-center">
                      <Rating
                        initialRating={3}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />

                      <div
                        style={{
                          width: "50%",
                        }}
                        className="ps-3"
                      >
                        <div
                          className="progress rounded-0"
                          role="progressbar"
                          aria-valuenow="30"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-muted ms-3">25</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div className="w-100 d-flex align-items-center">
                      <Rating
                        initialRating={2}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />

                      <div
                        style={{
                          width: "50%",
                        }}
                        className="ps-3"
                      >
                        <div
                          className="progress rounded-0"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "20%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-muted ms-3">20</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div className="w-100 d-flex align-items-center">
                      <Rating
                        initialRating={1}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />

                      <div
                        style={{
                          width: "50%",
                        }}
                        className="ps-3"
                      >
                        <div
                          className="progress rounded-0"
                          role="progressbar"
                          aria-valuenow="10"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar bg-warning"
                            style={{ width: "10%" }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-muted ms-3">5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-detail-comment__filter d-flex flex-wrap mt-3 py-1 justify-content-between align-items-center border-bottom border-top">
              <h5
                style={{
                  fontWeight: 500,
                  fontSize: "17px",
                }}
                className="my-2"
              >
                Məhsul rəyləri
              </h5>
              <div className="d-flex justify-content-end my-2">
                <div className="d-flex align-items-center me-3">
                  <Dropdown
                    options={[
                      "All stars",
                      "5 stars",
                      "4 stars",
                      "3 stars",
                      "2 stars",
                      "1 stars",
                    ]}
                    onChange={() => {}}
                    placeholder={
                      <span
                        style={{
                          fontWeight: 500,
                        }}
                        className="text-muted"
                      >
                        <FiFilter size={20} className="me-2" />
                        Filterlə
                      </span>
                    }
                  />
                </div>
                <div className="d-flex align-items-center">
                  <Dropdown
                    options={["Ən yeni", "Ən köhnə", "Ən yaxşı", "Ən pis"]}
                    onChange={() => {}}
                    placeholder={
                      <span
                        style={{
                          fontWeight: 500,
                        }}
                        className="text-muted"
                      >
                        <BiSortAlt2 size={20} className="me-2" />
                        Sırala
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="product-detail-comment__list mt-3">
              <div className="product-detail__comment border p-3">
                <div className="comment__header d-flex justify-content-between">
                  <span className="d-flex flex-column">
                    <span
                      style={{
                        fontWeight: 500,
                      }}
                      className="text-muted"
                    >
                      Adil Valizada{" "}
                      <span>
                        <MdVerified size={15} color="green" />
                      </span>
                    </span>
                    <Rating
                      initialRating={3}
                      emptySymbol={<AiOutlineStar color="#faaf00" size={15} />}
                      fullSymbol={<AiFillStar color="#faaf00" size={15} />}
                      readonly
                    />
                  </span>
                  <span className="text-muted">9 Aprel 2023</span>
                </div>
                <div className="comment__body mt-2">
                  <p
                    style={{
                      fontSize: "14px",
                    }}
                    className="text-muted"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    autem eaque facere placeat. Accusamus consectetur enim esse
                    exercitationem iste maiores voluptatibus voluptatum!
                    Assumenda cupiditate eaque eos minima modi possimus
                    veritatis!
                    <br />
                    <br />
                    <span className="card rounded-0 p-1 d-inline-block">
                      <img
                        width={80}
                        src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
                        alt="img"
                      />
                    </span>{" "}
                    <br />
                    <br />
                    exercitationem iste maiores voluptatibus voluptatum!
                    Assumenda cupiditate eaque eos minima modi possimus
                    veritatis!
                  </p>
                </div>
              </div>
              <div className="product-detail-comment__pagination mt-3">
                <nav>
                  <ul className="rounded-0 pagination justify-content-center justify-content-lg-end">
                    <li className="page-item disabled">
                      <a className="page-link rounded-0">Əvvəlki</a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link rounded-0" href="#">
                        Sonrakı
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <ShoppingSlider topicTitle={"Oxşar Məhsullar"} topicPath={"#"} />
        </div>
      </div>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
