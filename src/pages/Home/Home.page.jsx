import React from "react";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu.component.jsx";
import PromotionSlider from "../../components/PromotionSlider/PromotionSlider.component.jsx";
import CategorySection from "../../components/CategorySection/CategorySection.component.jsx";
import ShoppingSlider from "../../components/ShoppingSlider/ShoppingSlider.component.jsx";
import PromotionBox from "../../components/PromotionBox/PromotionBox.component.jsx";

const Home = () => {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-md-3">
          <CategoryMenu />
        </div>
        <div className="col-12 col-md-11 col-lg-8">
          <div className="col-12 mb-4 mb-md-2">
            <PromotionSlider />
          </div>
          <div className="col-12 mb-2 mb-md-3">
            <CategorySection />
          </div>
          <div className="col-12">
            <ShoppingSlider
              topicTitle={"Tövsiyə olunanlar"}
              topicPath={"#"}
              isShowRating={false}
            />
          </div>
          <div className="col-12 mt-2 mt-md-3">
            <ShoppingSlider topicTitle={"Sadəcə sizin üçün"} topicPath={"#"} />
          </div>
          <div className="col-12 my-2 my-md-3">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <PromotionBox />
              </div>
              <div className="col-md-6 d-none d-md-block">
                <PromotionBox />
              </div>
            </div>
          </div>
          <div className="col-12">
            <ShoppingSlider
              topicTitle={"Həftənin Seçimləri"}
              topicPath={"#"}
              isShowRating={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
