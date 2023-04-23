import { useState } from "react";
import ShoppingCardWrapper from "./ShoppingCard.styles.js";
import Rating from "react-rating";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { addToCart, removeFromCart } from "../../actions/cart.actions.js";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCard = ({
  isShowRating = true,
  isPromotion,
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
  const [rating, setRating] = useState(300);
  const [isFavorite, setIsFavorite] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const productCount = cart.cartItems.find(
    (item) => item.id === product.id
  )?.count;

  const navigate = useNavigate();
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
    <>
      <ShoppingCardWrapper className="card">
        <div className="card-header">
          <div className="wishlist-btn d-flex justify-content-end align-items-center">
            {isFavorite ? (
              <AiFillHeart color="#d23f57" size={23} onClick={handleFavorite} />
            ) : (
              <AiOutlineHeart
                color="#d23f57"
                size={23}
                onClick={handleFavorite}
              />
            )}
          </div>
          <div
            className={classNames("discount-badge", {
              isPromotion: isPromotion,
            })}
          >
            <span>{product.discount}% endirim</span>
          </div>
          <div className="card-img h-100 d-lg-flex justify-content-center align-items-center">
            <img
              src={product.image}
              alt="product image"
              width="80%"
              onClick={() =>
                navigate(`/product/${slugify(product.name.toLowerCase())}`, {
                  state: {
                    id: product.id,
                  },
                })
              }
            />
          </div>
        </div>
        <div className="card-body">
          <h6
            className="product-name"
            onClick={() =>
              navigate(`/product/${slugify(product.name.toLowerCase())}`, {
                state: {
                  id: product.id,
                },
              })
            }
            style={{
              fontSize: "12px",
            }}
          >
            {product.name}
          </h6>
          <span
            style={{
              color: "var(--text-muted)",
              fontSize: "12px",
            }}
          >
            {product.attribute}
          </span>
          <div
            className={classNames(
              {
                "mt-1": isShowRating,
                "mb-1": isShowRating,
                "my-1": !isShowRating,
              },
              "price d-flex flex-column"
            )}
            onClick={() =>
              navigate(`/product/${slugify(product.name.toLowerCase())}`, {
                state: {
                  id: product.id,
                },
              })
            }
          >
            <span
              style={{
                color: "var(--red)",
              }}
              className="new-price "
            >
              {(
                product.price * (productCount || 1) -
                (product.price * (productCount || 1) * product.discount) / 100
              ).toFixed(2)}{" "}
              <span className="currency fw-normal">₼</span>
            </span>
            <span
              style={{
                color: "#7d879c",
              }}
              className="old-price"
            >
              <del>
                {product.price * (productCount || 1)}{" "}
                <span className="currency fw-normal">₼</span>
              </del>
            </span>
          </div>
          <div
            className={classNames({ "d-none": !isShowRating }, "star-rating")}
          >
            <Rating
              initialRating={3}
              emptySymbol={<AiOutlineStar color="#faaf00" size={13} />}
              fullSymbol={<AiFillStar color="#faaf00" size={13} />}
              readonly
            />{" "}
            <span className="ms-1">({rating})</span>
          </div>
          <div
            className={classNames(
              {
                "mt-2": isShowRating,
              },
              "add-to-cart-btns d-flex justify-content-between align-items-center"
            )}
          >
            {productCount > 0 ? (
              <>
                <button
                  onClick={() => handleProductCount("remove")}
                  className="add-to-cart-btn"
                >
                  <BiMinus color="#D23F57" size={13} />
                </button>
                <h5 className="mx-2">{productCount}</h5>
                <button
                  onClick={() => handleProductCount("add")}
                  className="add-to-cart-btn"
                >
                  <IoMdAdd color="#D23F57" size={13} />
                </button>
              </>
            ) : (
              <button
                onClick={() => handleProductCount("add")}
                className="add-to-cart-btn"
              >
                Səbətə at
              </button>
            )}
          </div>
        </div>
      </ShoppingCardWrapper>
    </>
  );
};

export default ShoppingCard;
