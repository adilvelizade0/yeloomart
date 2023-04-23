import styled from "styled-components";

const ShoppingSliderWrapper = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 5px;
  width: 100%;

  .slick-arrow {
    &::before {
      display: none;
    }
    background-color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 16px rgb(43 52 69 / 10%);
    border-radius: 50%;
  }

  .slick-prev {
    z-index: 1;
  }

  @media (max-width: 580px) {
    border-radius: 0;
  }
`;

export default ShoppingSliderWrapper;
