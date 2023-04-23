import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import PromotionSliderWrapper from "./PromotionSlider.styles.js";
const PromotionSlider = () => {
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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    navigation: true,
    arrows: true,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    dots: false,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <PromotionSliderWrapper>
      <div className="px-2 px-md-0">
        <Slider {...settings}>
          <div className="promotion rounded shadow-sm overflow-hidden my-3">
            <img
              src="https://lzd-img-global.slatic.net/g/gcp/lazada/932f29cb-90da-4b16-82e4-191e2a13af92_SG-988-256.jpg_2200x2200q80.jpg_.webp"
              alt="promotion"
              className="img-fluid"
            />
          </div>
          <div className="promotion rounded overflow-hidden my-3 shadow-sm">
            <img
              src="https://lzd-img-global.slatic.net/g/gcp/lazada/211590be-040a-4d51-a4a0-8ff074697d4a_SG-988-256.jpg_2200x2200q80.jpg_.webp"
              alt="promotion"
              className="img-fluid"
            />
          </div>
          <div className="promotion rounded shadow-sm overflow-hidden my-3">
            <img
              src="https://lzd-img-global.slatic.net/g/gcp/lazada/71c101ad-9113-4dd8-b8fd-b5ef33086fba_SG-988-256.jpg_2200x2200q80.jpg_.webp"
              alt="promotion"
              className="img-fluid"
            />
          </div>
        </Slider>
      </div>
    </PromotionSliderWrapper>
  );
};

export default PromotionSlider;
