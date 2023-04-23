import React, { useState } from "react";
import ShoppingModalWrapper from "./ShoppingModal.styles.js";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const customStyles = {
  content: {
    maxWidth: "90%",
    width: "100%",
    maxHeight: "90%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
};

Modal.setAppElement(document.getElementById("root"));
const ShoppingModal = ({
  modalIsOpen,
  setIsOpen,
  productCount,
  handleProductCount,
}) => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0}
      type="button"
    >
      <BsArrowLeftShort color="#d23f57" size={30} />,
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1}
      type="button"
    >
      <BsArrowRightShort color="#d23f57" size={30} />
    </button>
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slideCount: 5,
    autoplay: true,
    navigation: true,
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: true,
  };

  return (
    <>
      <Modal
        shouldCloseOnOverlayClick={true}
        isOpen={!!modalIsOpen}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        <div id="yourAppElement">
          <ShoppingModalWrapper>
            <div className="modal-header d-flex justify-content-end align-items-center">
              <IoCloseOutline
                className="modal-close-btn"
                size={25}
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="modal-content pb-5">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-5 px-5 mb-5 mb-lg-0">
                  <Slider {...settings}>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                      <div
                        key={index}
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img
                          src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2FGroceries%20Shop%2Fstrawberry.png&w=3840&q=75"
                          alt="strawberry"
                          className="img-fluid"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="col-lg-6 px-4">
                  <div className="modal-product-info">
                    <h2 className="modal-product-title fw-bold">
                      Təzə Çiyələk{" "}
                    </h2>
                    <p className="modal-product-category">
                      KATEGORİYA: <span>Meyvələr</span>
                    </p>
                    <h1 className="modal-product-price">
                      <span className="currency">₼</span> 15.00
                    </h1>
                    <div className="star-rating">
                      <Rating
                        initialRating={3}
                        emptySymbol={
                          <AiOutlineStar color="#faaf00" size={20} />
                        }
                        fullSymbol={<AiFillStar color="#faaf00" size={20} />}
                        readonly
                      />{" "}
                      <span className="ms-2">(50)</span>
                    </div>
                    <p className="modal-product-description mt-3 mb-4">
                      Sed egestas, ante et vulputate volutpat, eros pede semper
                      est, vitae luctus metus libero eu augue. Morbi purus
                      liberpuro ate vol faucibus adipiscing. lorem ipsum dolor
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A ab aspernatur corporis eius explicabo ipsam mollitia
                      provident saepe. Corporis enim in iste modi, natus nihil
                      numquam odio optio quibusdam rem.
                    </p>
                    {productCount > 0 ? (
                      <div className="add-to-cart-btns d-flex align-items-center">
                        <button
                          onClick={() => handleProductCount("add")}
                          className="add-to-cart-btn me-2"
                        >
                          <IoMdAdd size={20} />
                        </button>
                        <h4 className="product-count ">{productCount}</h4>
                        <button
                          onClick={() => handleProductCount("remove")}
                          className="add-to-cart-btn ms-2"
                        >
                          <BiMinus size={20} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleProductCount("add")}
                        className="add-to-cart-btn"
                      >
                        Səbətə əlavə et
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ShoppingModalWrapper>
        </div>
      </Modal>
    </>
  );
};

export default ShoppingModal;
