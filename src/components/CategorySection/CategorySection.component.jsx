import React from "react";
import CategorySectionWrapper from "./CategorySection.styles.js";
import TopicSection from "../TopicSection/TopicSection.component.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const CategorySection = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    autoplay: true,
    navigation: false,
    arrows: false,
    dots: false,
  };
  return (
    <CategorySectionWrapper className="d-lg-none">
      <div className="container">
        <TopicSection path={"#"} title={"Kategoriyalar"} />
        <Slider {...settings}>
          {[...Array(14)].map((item, index) => (
            <div key={index} className="p-2 text-center">
              <div
                style={{
                  objectFit: "cover",
                  overflow: "hidden",
                  borderWidth: "2px",
                  backgroundColor: "#f5f5f5",
                  borderColor: "#f5f5f5",
                }}
                className="card p-1"
              >
                <img
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/28cb9617-e53d-4995-bc66-72adca1d882f.jpg_150x150q80.jpg_.webp"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                }}
                className="d-inline-block text-truncate  mt-1"
              >
                <span className="d-block">Fast Food</span>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </CategorySectionWrapper>
  );
};

export default CategorySection;
