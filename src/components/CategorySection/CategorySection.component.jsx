import React, { useEffect } from "react";
import CategorySectionWrapper from "./CategorySection.styles.js";
import TopicSection from "../TopicSection/TopicSection.component.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";

const CategorySection = () => {
  const { data } = useSelector((state) => state.categories);

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
        <TopicSection path={"/categories"} title={"Kategoriyalar"} />
        <Slider {...settings}>
          {data.map((category, index) => (
            <div key={index} className="p-2 text-center">
              <div
                style={{
                  objectFit: "contain",
                  overflow: "hidden",
                  borderWidth: "2px",
                  backgroundColor: "#f5f5f5",
                  borderColor: "#f5f5f5",
                  maxHeight: "100px",
                  maxWidth: "100px",
                  height: "80px",
                }}
                className="card p-1 d-flex align-items-center justify-content-center"
              >
                <img
                  style={{
                    objectFit: "contain",
                  }}
                  src={category.cover_image}
                  className="img-fluid"
                  alt="category-cover"
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                }}
                className="d-inline-block text-truncate  mt-1"
              >
                <span className="d-block">
                  {category.category_name.length > 10
                    ? category.category_name.slice(0, 10) + "..."
                    : category.category_name}
                </span>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </CategorySectionWrapper>
  );
};

export default CategorySection;
