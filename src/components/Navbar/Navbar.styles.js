import styled from "styled-components";

const NavbarWrapper = styled.nav`
  background-color: var(--red);
  .navbar-top {
    .cart-count-badge {
      position: absolute;
      top: -3px;
      left: 23px;
      background-color: #B01E68;
      color: #fff;
      width: 16px;
      height: 16px;
      border-radius: 5px;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.2px;
      text-align: center;
      line-height: 16px;
    }
  }
`;

export default NavbarWrapper;
