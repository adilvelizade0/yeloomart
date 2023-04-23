import React from "react";
import {
  CategoryMenuWrapper,
  SubCategoryMenuWrapper,
} from "./CategoryMenu.styles.js";
import { IoIosArrowForward } from "react-icons/io";
import Popup from "reactjs-popup";

const SubCategoryMenu = () => {
  return (
    <SubCategoryMenuWrapper className="p-4 d-flex flex-wrap">
      <h5>Organic Fruits & Vegetables</h5>
      <div className="row mt-3">
        <div className="col-3 my-2 p-0">
          <div className="card text-center p-0 d-flex flex-column align-items-center mx-3">
            <img
              src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
              alt="subcategory"
              width="90%"
            />
            <h6 className="mt-2">Fresh Fruits</h6>
          </div>
        </div>
        <div className="col-3 my-2 p-0">
          <div className="card text-center p-0 d-flex flex-column align-items-center mx-3">
            <img
              src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
              alt="subcategory"
              width="90%"
            />
            <h6 className="mt-2">Fresh Fruits</h6>
          </div>
        </div>
        <div className="col-3 my-2 p-0">
          <div className="card text-center p-0 d-flex flex-column align-items-center mx-3">
            <img
              src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
              alt="subcategory"
              width="90%"
            />
            <h6 className="mt-2">Fresh Fruits</h6>
          </div>
        </div>
        <div className="col-3 my-2 p-0">
          <div className="card text-center p-0 d-flex flex-column align-items-center mx-3">
            <img
              src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
              alt="subcategory"
              width="90%"
            />
            <h6 className="mt-2">Fresh Fruits</h6>
          </div>
        </div>
        <div className="col-3 my-2 p-0">
          <div className="card text-center p-0 d-flex flex-column align-items-center mx-3">
            <img
              src="https://lzd-img-global.slatic.net/g/p/63071a9b1cdebcfa34598e098e591485.jpg_300x300q80.jpg_.webp"
              alt="subcategory"
              width="90%"
            />
            <h6 className="mt-2">Fresh Fruits</h6>
          </div>
        </div>
      </div>

      <br />
    </SubCategoryMenuWrapper>
  );
};

const CategoryMenu = () => {
  return (
    <CategoryMenuWrapper
      style={{
        top: "80px",
      }}
      className="py-3 px-4 mt-3 shadow-sm sticky-top d-none d-lg-block"
    >
      <ul className="categories list-unstyled ">
        <Popup
          on="hover"
          trigger={
            <li className="category d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  width={40}
                  height={40}
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/6f51e3d4-e529-4a28-84d8-fcd2da324fa2.jpg_150x150q80.jpg_.webp"
                  alt="category-img"
                />
                <span className="d-block fw-bold ms-2">Organic Food</span>
              </div>
              <IoIosArrowForward className="arrow" size={20} />
            </li>
          }
          position="right top"
        >
          <SubCategoryMenu />
        </Popup>
        <Popup
          on="hover"
          trigger={
            <li className="category d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  width={40}
                  height={40}
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/6f51e3d4-e529-4a28-84d8-fcd2da324fa2.jpg_150x150q80.jpg_.webp"
                  alt="category-img"
                />
                <span className="d-block fw-bold ms-2">Organic Food</span>
              </div>
              <IoIosArrowForward className="arrow" size={20} />
            </li>
          }
          position="right top"
        >
          <SubCategoryMenu />
        </Popup>
        <Popup
          on="hover"
          trigger={
            <li className="category d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  width={40}
                  height={40}
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/6f51e3d4-e529-4a28-84d8-fcd2da324fa2.jpg_150x150q80.jpg_.webp"
                  alt="category-img"
                />
                <span className="d-block fw-bold ms-2">Organic Food</span>
              </div>
              <IoIosArrowForward className="arrow" size={20} />
            </li>
          }
          position="right top"
        >
          <SubCategoryMenu />
        </Popup>
        <Popup
          on="hover"
          trigger={
            <li className="category d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  width={40}
                  height={40}
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/6f51e3d4-e529-4a28-84d8-fcd2da324fa2.jpg_150x150q80.jpg_.webp"
                  alt="category-img"
                />
                <span className="d-block fw-bold ms-2">Organic Food</span>
              </div>
              <IoIosArrowForward className="arrow" size={20} />
            </li>
          }
          position="right top"
        >
          <SubCategoryMenu />
        </Popup>
      </ul>
    </CategoryMenuWrapper>
  );
};

export default CategoryMenu;
