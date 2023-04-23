import { useState } from "react";
import CategoriesWrapper from "./Categories.styles.js";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component.jsx";
import MobileNavigator from "../../components/MobileNavigator/MobileNavigator.component.jsx";
import BottomBar from "../../components/BottomBar/BottomBar.component.jsx";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  const [tab, setTab] = useState(0);

  return (
    <CategoriesWrapper>
      <div className="sticky-top">
        <MobileNavigator name="Kateqoriyalar" />
        <Breadcrumb />
      </div>

      <main className="d-flex">
        <div
          style={{
            width: "45%",
          }}
          className="categories"
        >
          <ul className="list-unstyled">
            <li
              onClick={() => {
                setTab(0);
              }}
              className={classNames(
                {
                  active: tab === 0,
                },
                "category  d-flex align-items-center justify-content-between"
              )}
            >
              <div className="category__img shadow-sm me-3">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/images/ims-web/TB1z9pMpBr0gK0jSZFnXXbRRXXa.jpg_80x80q80.jpg_.webp"
                  alt="category"
                  width="100%"
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
                className="text-muted"
              >
                Meyvə və sebzələr
              </span>
            </li>
            <li
              onClick={() => {
                setTab(1);
              }}
              className={classNames(
                {
                  active: tab === 1,
                },
                "category  d-flex align-items-center justify-content-between"
              )}
            >
              <div className="category__img shadow-sm me-3">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/images/ims-web/TB1kMHReBr0gK0jSZFnXXbRRXXa.jpg_80x80q80.jpg_.webp"
                  alt="category"
                  width="100%"
                  height="100%"
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
                className="text-muted"
              >
                Endirimli məhsullar
              </span>
            </li>
            <li
              onClick={() => {
                setTab(2);
              }}
              className={classNames(
                {
                  active: tab === 2,
                },
                "category  d-flex align-items-center justify-content-between"
              )}
            >
              <div className="category__img shadow-sm me-3 ">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/images/ims-web/TB14mNMpBr0gK0jSZFnXXbRRXXa.jpg_80x80q80.jpg_.webp"
                  alt="category"
                  width="100%"
                  height="100%"
                />
              </div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                }}
                className="text-muted"
              >
                Ət və balıq məhsulları
              </span>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: "55%",
          }}
          className="subcategories w-75 "
        >
          <div className="p-3 d-flex justify-content-end">
            <a href="#">
              <span>Hamısına bax</span>
              <IoIosArrowForward size={16} />
            </a>
          </div>
          <div className="row w-100 justify-content-center my-2">
            <div className="col-11">
              <div className="promotion__item">
                <img
                  src="https://lzd-img-global.slatic.net/g/gcp/lazada/bb159e03-e397-4c2b-9179-8661bbf7ca4b_SG-1360-480.jpg_1200x1200q80.jpg_.webp"
                  alt="promotion"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="content px-2">
            <div className="row w-100 px-3">
              <div className="col-4 d-flex flex-column justify-content-center align-items-center text-center my-2">
                <img
                  src="https://lzd-img-global.slatic.net/g/icms/images/ims-web/e26e14b8-2893-4a3c-a1b5-b83eae8606cd.jpg_120x120q80.jpg_.webp"
                  alt="category-img"
                  className="mb-2"
                  width={50}
                  height={50}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Hədiyyələr
                </span>
              </div>
              <div className="col-4 d-flex flex-column justify-content-center align-items-center text-center my-2">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1fXphIMHqK1RjSZFEXXcGMXXa-1600-1600.jpg_120x120q80.jpg_.webp"
                  alt="category-img"
                  className="mb-2"
                  width={50}
                  height={50}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Sebzələr
                </span>
              </div>
              <div className="col-4 d-flex flex-column justify-content-center align-items-center text-center my-2">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/images/ims-web/TB1r2ckdBr0gK0jSZFnXXbRRXXa.jpg_120x120q80.jpg_.webp"
                  alt="category-img"
                  className="mb-2"
                  width={50}
                  height={50}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Tropikal meyvələr
                </span>
              </div>
              <div className="col-4 d-flex flex-column justify-content-center align-items-center text-center my-2">
                <img
                  src="https://lzd-img-global.slatic.net/g/tps/tfs/TB1yms_Lr2pK1RjSZFsXXaNlXXa-1600-1600.jpg_120x120q80.jpg_.webp"
                  alt="category-img"
                  className="mb-2"
                  width={50}
                  height={50}
                />
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  Dondurulmuş tərəvəzlər
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <BottomBar />
    </CategoriesWrapper>
  );
};

export default Categories;
