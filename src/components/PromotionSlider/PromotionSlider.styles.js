import styled from "styled-components";

const PromotionSliderWrapper = styled.div`
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
    left: 20px;
  }

  .slick-next {
    z-index: 1;
    right: 20px;
  }

  @media (max-width: 580px) {
    .slick-dots {
      bottom: -10px !important;
    }

    .slick-dots li button:before {
      font-size: 12px !important;
    }

    .slick-dots li.slick-active button:before {
      font-size: 12px !important;
      color: #b01e68;
    }

    .promotion {
      object-fit: cover !important;

      overflow: hidden;
      border-radius: 5px !important;
    }
  }
`;

export default PromotionSliderWrapper;
