import styled from "styled-components";

const ProductDetailWrapper = styled.div`
  .product-detail-container {
    background-color: #fff;
    padding: 15px 10px;

    .add-to-cart-btn {
      width: 100%;
      background-color: transparent;
      border: 1.5px solid #b01e68;
      padding: 8px 3px;
      border-radius: 5px;
      transition: all 0.3s;
      color: #b01e68;
      font-weight: bold;
      font-size: 12px;

      &:hover {
        background-color: #b01e68;
        color: white;
        svg {
          fill: white;
        }
      }
    }

    .add-to-cart {
      background-color: transparent;
      border: 1.5px solid #b01e68;
      padding: 10px 20px;
      border-radius: 5px;
      transition: all 0.3s;
      color: #b01e68;
      font-weight: bold;
      font-size: 15px;

      &:hover {
        background-color: #b01e68;
        color: white;
        svg {
          fill: white;
        }
      }
    }
  }
`;

export default ProductDetailWrapper;
