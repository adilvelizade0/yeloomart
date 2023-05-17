import styled from "styled-components";

const CartWrapper = styled.div`
  .box {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
  }

  .trash {
    transition: all 0.3s;
    &:hover {
      color: #b01e68 !important;
    }
  }

  .like {
    color: #b01e68;
  }

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

  @media (max-width: 580px) {
    .product-detail {
      img {
        width: 60px !important;
        height: 60px !important;
      }

      .product-detail__name {
        font-size: 12px !important;
      }
    }

    .product-detail__price--new {
      font-size: 16px !important;
    }

    .product-detail__price--discount {
      font-size: 13px !important;
    }

    .product-detail__price--old {
      font-size: 13px !important;
    }

    .add-to-cart-btn {
      padding: 7px 3px !important;
    }
  }
`;

export default CartWrapper;
