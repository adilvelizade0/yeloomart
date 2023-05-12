import React, { useEffect, useState } from "react";
import SignUpWrapper from "./SignUp.styles.js";
import Navbar from "../../../components/Navbar/Navbar.component.jsx";
import MobileNavigator from "../../../components/MobileNavigator/MobileNavigator.component.jsx";
import { Link, useNavigate } from "react-router-dom";
import BottomBar from "../../../components/BottomBar/BottomBar.component.jsx";
import { useIsAuthenticated } from "react-auth-kit";
import parsePhoneNumber, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "libphonenumber-js";
import { useMutation } from "@tanstack/react-query";
import { publicAxios } from "../../../utils/axios.helpers.js";
import axios, { AxiosError } from "axios";
import { Oval } from "react-loader-spinner";

const SignUp = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  // region *State
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const [surname, setSurname] = useState("");
  const [surnameError, setSurnameError] = useState(null);
  const [registerError, setRegisterError] = useState(null);
  // endregion

  const signup = async () => {
    try {
      return await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/registration/`,
        {
          username: name + " " + surname,
          phone: phone.split(" ").join(""), // remove spaces
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          throw new Error("Bu nömrə artıq qeydiyyatdan keçib");
        }
      }
    }
  };
  const { mutate, isLoading, isError, error } = useMutation(signup, {
    onSuccess: (data) => {
      navigate("/sign-in");
    },
    onError: (error) => {
      setRegisterError(error.message);
    },
  });

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/profile");
    }
  }, [isAuthenticated()]);
  const phoneFormatter = (value) => {
    const phoneNumber = parsePhoneNumber(value, "AZ", {
      extended: true,
    });

    if (!phoneNumber) {
      return value;
    }

    return phoneNumber.formatInternational();
  };
  const validatePhone = (value) => {
    return (
      isPossiblePhoneNumber(value, "AZ") && isValidPhoneNumber(value, "AZ")
    );
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const formattedValue = phoneFormatter(value);
    setPhone(formattedValue);
    setPhoneError(null);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const phoneIsValid = validatePhone(phone);

    if (!phoneIsValid) {
      setPhoneError("Telefon nömrəsi düzgün deyil");
    }

    if (!phone) {
      setPhoneError("Telefon nömrəsi boş ola bilməz");
    }

    if (!name) {
      setNameError("Ad boş ola bilməz");
    }

    if (!surname) {
      setSurnameError("Soyad boş ola bilməz");
    }

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailIsValid = emailRegex.test(email);

    if (!email) {
      setEmailError("E-poçt boş ola bilməz");
    }

    if (!emailIsValid) {
      setEmailError("E-poçt düzgün deyil");
    }

    if (emailIsValid && email && name && surname && phoneIsValid && phone) {
      mutate();
    }
  };

  return (
    <SignUpWrapper>
      <div className="sticky-top">
        <div
          className="
        d-none d-lg-block
      "
        >
          <Navbar />
        </div>
        <MobileNavigator
          name="
            Qeydiyyat və Giriş
        "
        />

        <div className="tab-bar d-flex d-lg-none shadow-sm">
          <div className="tab">
            <Link to="/sign-in">Giriş</Link>
          </div>
          <div className="tab active">
            <Link to="/sign-up">Qeydiyyat</Link>
          </div>
        </div>
      </div>
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h5 className="mb-3 text-center text-lg-start">
                Qeydiyyatdan keçmək üçün aşağıdakı məlumatları daxil edin
              </h5>

              <form onSubmit={onSubmit} className="shadow-sm">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Adınız"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError(null);
                    }}
                  />
                  {nameError && <span className="error">{nameError}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="surname"
                    placeholder="Soyadınız"
                    value={surname}
                    onChange={(e) => {
                      setSurname(e.target.value);
                      setSurnameError(null);
                    }}
                  />
                  {surnameError && (
                    <span className="error">{surnameError}</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Telefon nömrəniz"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {phoneError && <span className="error">{phoneError}</span>}
                </div>
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="E-poçt ünvanınız"
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(null);
                    }}
                  />
                  {emailError && <span className="error">{emailError}</span>}
                </div>
                {registerError && (
                  <div className="alert alert-danger">{registerError}</div>
                )}
                <div className="form-group mt-4">
                  <button
                    disabled={isLoading}
                    type="submit"
                    className="btn btn-primary d-flex justify-content-center align-items-center"
                  >
                    {isLoading ? (
                      <Oval
                        height={25}
                        width={25}
                        color="#ee4054"
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#ee4054"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                      />
                    ) : (
                      "Qeydiyyatdan keç"
                    )}
                  </button>
                </div>
                <span
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontSize: "14px",
                  }}
                  className="mt-3 d-block"
                >
                  Hesabınız varsa , <Link to="/sign-in">Giriş</Link> edin
                </span>
              </form>
            </div>
          </div>
        </div>
      </main>

      <BottomBar />
    </SignUpWrapper>
  );
};

export default SignUp;
