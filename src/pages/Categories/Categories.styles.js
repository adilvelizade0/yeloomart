import styled from "styled-components";

const CategoriesWrapper = styled.div`
  width: 100%;
  .categories {
    height: 85vh;
    overflow: scroll;

    .category {
      padding: 10px;
      cursor: pointer;
      .category__img {
        width: 40px;
        height: 40px;
        min-width: 40px;
        min-height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        object-fit: contain;
        overflow: hidden;
        background-color: #fff;
      }
    }

    .active {
      background-color: #fff;
      color: var(--red);
    }
  }

  .subcategories {
    background: #fff;
    height: 85vh;
  }
`;

export default CategoriesWrapper;
