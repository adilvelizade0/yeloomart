import styled from "styled-components";

const ShoppingModalWrapper = styled.div`
  .modal-header {
    .modal-close-btn {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        color: var(--red);
      }
    }
  }

  .slick-active button:before {
    color: var(--red) !important;
  }

  .modal-content {
    .modal-product-info {
      .modal-product-category {
        color: rgb(174, 180, 190) !important;
      }

      .modal-product-price {
        color: var(--red) !important;
      }

      .add-to-cart-btn {
        background-color: var(--red);
        color: var(--white);
        border: none;
        border-radius: 5px;
        padding: 1rem;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: rgb(227, 54, 78);
          box-shadow: rgb(3 0 71 / 1%) 0 0 28px;
        }

        &:active {
          box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px,
            rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
        }
      }

      .modal-product-description {
        color: rgb(43, 52, 69) !important;
      }
    }
  }
`;

export default ShoppingModalWrapper;
