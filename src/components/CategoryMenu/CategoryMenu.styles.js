import styled from "styled-components";

const CategoryMenuWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;

  .categories {
    .category {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      margin: 10px 0;

      &:hover {
        color: var(--red);
      }
    }
  }
`;

const SubCategoryMenuWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-left: 17px;
  width: 434px;

  .card {
    border: 1px solid #ebebeb;
    padding: 3px !important;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    h6 {
      font-size: 12px !important;
    }

    &:hover {
      color: var(--red);
    }
  }
`;

export { CategoryMenuWrapper, SubCategoryMenuWrapper };
