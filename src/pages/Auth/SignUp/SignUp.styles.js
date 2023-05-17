import styled from "styled-components";

const SignUpWrapper = styled.div`
  .tab-bar {
    width: 100%;
    background-color: #fff;

    .tab {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 13px 0;

      a {
        text-decoration: none;
        font-weight: 600;
      }
    }

    .active {
      border-bottom: 3px solid var(--red);
      a {
        color: var(--red) !important;
      }
    }
  }

  form {
    background-color: #fff;
    padding: 20px;
    label {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 5px;
      display: block;
    }
    input {
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      width: 100%;
      border-radius: 0;
      margin-bottom: 10px;
      font-size: 13px;
      outline: none;
      font-weight: 500;
      box-shadow: none;

      &:focus {
        border-bottom: 1px solid #b01e68;
        background-color: transparent;
        outline: none;
        box-shadow: none;
      }
    }

    .error {
      color: #b01e68;
      font-size: 12px;
    }

    .otp-input {
      align-items: center;
      position: relative;

      .otp-action-button {
        background-color: transparent;
        border: none;
        color: #7c848a;
        font-weight: 500;
        font-size: 13px;
        border-radius: 0;
        position: absolute;
        right: 0;
        cursor: default;
        top: 10px;
      }

      .active-otp {
        color: #b01e68;
        cursor: pointer;
      }
    }

    button[type="submit"] {
      width: 100%;
      background-color: transparent;
      border: 1.5px solid #b01e68;
      padding: 8px 3px;
      border-radius: 5px;
      transition: all 0.3s;
      color: #b01e68;
      font-weight: bold;
      font-size: 14px;

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

export default SignUpWrapper;
