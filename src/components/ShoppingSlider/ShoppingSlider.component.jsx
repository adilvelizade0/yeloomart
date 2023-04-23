import React from "react";
import ShoppingSliderWrapper from "./ShoppingSlider.styles.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import ShoppingCard from "../ShoppingCard/ShoppingCard.component.jsx";
import TopicSection from "../TopicSection/TopicSection.component.jsx";

const ShoppingSlider = ({ isShowRating, topicPath, topicTitle }) => {
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
      <BsArrowLeftShort className="arrow" color="#d23f57" size={30} />,
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
      <BsArrowRightShort className="arrow" color="#d23f57" size={30} />
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    navigation: true,
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: false,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <ShoppingSliderWrapper>
      <div className="container">
        <TopicSection title={topicTitle} path={topicPath} />
        <Slider {...settings}>
          <div>
            <ShoppingCard isShowRating={isShowRating} isPromotion={true} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} isPromotion={true} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} />
          </div>
          <div>
            <ShoppingCard isShowRating={isShowRating} isPromotion={true} />
          </div>
        </Slider>
      </div>
    </ShoppingSliderWrapper>
  );
};

export default ShoppingSlider;
