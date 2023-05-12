import { useHref, Link } from "react-router-dom";
import v from "voca";
import classNames from "classnames";

const Breadcrumb = () => {
  const href = useHref();

  const check = (item) => {
    if (item === "product") {
      return "Məhsul";
    } else if (item === "cart") {
      return "Səbət";
    } else if (item === "categories") {
      return "Kateqoriyalar";
    } else if (item === "profile") {
      return "Profil";
    } else {
      return v.capitalize(item);
    }
  };

  return (
    <nav
      style={{
        backgroundColor: "#f8f9fa",
      }}
      aria-label="breadcrumb"
      className="py-2 px-4"
    >
      <ol className="breadcrumb mb-0 container ps-lg-3">
        <li>
          <Link to="/">Əsas Səhifə</Link>
        </li>
        {v.split(href, "/").map((item, index) => {
          return (
            <li
              key={index}
              className={classNames(
                {
                  active: index === v.split(href, "/").length - 1,
                },
                "breadcrumb-item"
              )}
            >
              {index === v.split(href, "/").length - 1 ? (
                <span>{check(item)}</span>
              ) : (
                <Link
                  to={v
                    .split(href, "/")
                    .slice(0, index + 1)
                    .join("/")}
                >
                  {check(item)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
