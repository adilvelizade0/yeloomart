import styled from "styled-components";

const SearchBarWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 30px;
  height: 45px;

  .logo-container {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    //background-color: #f5f5f5;
    background-color: #28282B;
    border-radius: 30px 0 0 30px;
    cursor: pointer;
  }

  .search-container {
    width: 100%;
    height: 100%;
    input {
      height: 100%;
      width: 100%;
      border: 1px solid #fff;
      outline: none;
      padding-left: 10px;
      font-size: 16px;
      border-radius: 0;
    }
  }

  .icon-container {
    background-color: #fff;
    height: 100%;
    padding: 0 15px;
    display: flex;
    align-items: center;
    border-radius: 0 30px 30px 0;

    svg {
      cursor: pointer;
    }
  }

  @media (max-width: 920px) {
    height: 35px;
    .logo-container {
      img {
        width: 30px;
        height: 30px;
      }
    }

    .search-container {
      input {
        font-size: 12px;
        padding-left: 5px;
      }
    }

    .icon-container {
      font-size: 15px !important;
    }
  }
`;

export default SearchBarWrapper;
