import styled from "styled-components";
const ShoppingCardWrapper = styled.div`
  border: none;
  width: 100%;
  border-radius: 0;
  z-index: 1;

  .card-header {
    border: none;
    padding: 0;
    position: relative;
    z-index: 0;
    background-color: #fff;
    overflow: hidden;

    .wishlist-btn {
      position: absolute;
      top: 0;
      right: 0;
    }

    .card-img {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        cursor: pointer;
      }
    }
    .discount-badge {
      background-color: #b01e68;
      display: inline-block;
      padding: 5px;
      color: white;
      font-size: 11px;
      border-radius: 5px;
      position: absolute;
      bottom: 0;
      left: 10px;
    }

    .isPromotion {
      background-color: rgb(0, 155, 189) !important;
    }
  }
  .card-body {
    position: relative;

    h6.product-name {
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        color: #b01e68;
      }
    }

    .price {
      font-size: 15px;
      font-family: "noto-sans", sans-serif;
      font-weight: 600;
      cursor: pointer;

      .old-price {
        font-size: 12px;
        font-weight: 400;
        color: var(--text-muted);
      }
    }

    .star-rating {
      font-size: 12px;
      color: var(--text-muted);
    }

    .add-to-cart-btns {
      .add-to-cart-btn {
        width: 100%;
        background-color: transparent;
        border: 1.5px solid #b01e68;
        padding: 5px 3px;
        border-radius: 5px;
        transition: all 0.3s;
        color: #b01e68;
        font-weight: bold;
        font-size: 12px;

        &:hover {
          background-color: #b01e68;
          color: #fff;
          svg {
            fill: white;
          }
        }
      }
    }
  }

  @media (max-width: 580px) {
    .card-header {
      //.discount-badge {
      //  display: block;
      //  top: 0;
      //  left: 10px;
      //  bottom: unset;
      //}
    }

    .card-body {
      .add-to-cart-btn {
        font-size: 10px;
      }
    }
  }
`;
export default ShoppingCardWrapper;
