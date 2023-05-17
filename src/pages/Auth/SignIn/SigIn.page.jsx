import React, { useState, useEffect, useRef } from "react";
import SignInWrapper from "./SignIn.styles.js";
import BottomBar from "../../../components/BottomBar/BottomBar.component.jsx";
import Navbar from "../../../components/Navbar/Navbar.component.jsx";
import MobileNavigator from "../../../components/MobileNavigator/MobileNavigator.component.jsx";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import parsePhoneNumber, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "libphonenumber-js";
import classNames from "classnames";
import { publicAxios } from "../../../utils/axios.helpers.js";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Oval } from "react-loader-spinner";

const SignIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/profile");
    }
  }, [isAuthenticated()]);

  // region *State
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);
  const [signInError, setSignInError] = useState(null);
  const [otpLoading, setOtpLoading] = useState(false);
  // endregion

  // region *Phone Number Formatter
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
  // endregion

  const SignIn = async () => {
    try {
      const res = await publicAxios.post("/auth/login/", {
        phone: phone.split(" ").join(""),
        password: otp,
      });

      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response.data.message);
      }

      throw new Error(e);
    }
  };
  const signIn = useSignIn();
  const { mutate, isLoading, isError, error } = useMutation(SignIn, {
    onSuccess: (data) => {
      if (
        signIn({
          token: data.access,
          expiresIn: data.accessTokenExpireIn,
          tokenType: "Bearer",
          refreshToken: data.refresh,
          refreshTokenExpireIn: data.refreshTokenExpireIn,
          authState: data.authState,
        })
      ) {
        navigate("/profile");
      }
    },
    onError: (error) => {
      setSignInError(error.message);
    },
  });
  const sendOtp = async () => {
    try {
      setOtpLoading(true);
      const res = await publicAxios.post("/auth/get-otp/", {
        phone: phone.split(" ").join(""),
      });

      return res;
    } catch (e) {
      if (e instanceof AxiosError) {
        throw new Error(e.response.data.message);
      }

      throw new Error(e);
    }
  };

  // region *Timer
  const timer = useRef(60);
  const [timerState, setTimerState] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [timerFinished, setTimerFinished] = useState(false);
  let timerInterval = null;
  const handleTimer = () => {
    if (phone.length === 0) {
      setPhoneError("Telefon nömrəsi boş ola bilməz");
      return;
    }

    if (!validatePhone(phone)) {
      setPhoneError("Telefon nömrəsi düzgün deyil");
      return;
    }

    setTimerActive(true);
    timerInterval = setInterval(() => {
      timer.current = timer.current - 1;
      setTimerState(timer.current);
      // setTimer(timer - 1);
    }, 1000);
  };

  useEffect(() => {
    if (timerState === 0) {
      setTimerFinished(true);
      setTimerActive(false);
      clearInterval(timerInterval);
      timerInterval = null;
      timer.current = 60;
      setTimerState(timer.current);
    }
  }, [timerState]);
  const handleResend = () => {
    clearInterval(timerInterval);
    sendOtp()
      .then((res) => {
        alert(`SMS Təsdiqləmə Kodunuz ${res.data.otp}`);
        setOtpLoading(false);
        handleTimer();
      })
      .catch((e) => {
        setOtpError(e.message);
      });
  };
  // endregion

  const onSubmit = (e) => {
    e.preventDefault();
    const phoneIsValid = validatePhone(phone);

    if (!phoneIsValid) {
      setPhoneError("Telefon nömrəsi düzgün deyil");
    }

    if (!phone) {
      setPhoneError("Telefon nömrəsi boş ola bilməz");
    }

    if (!otp) {
      setOtpError("SMS Təsdiqləmə Kodu boş ola bilməz");
    }

    if (phoneIsValid && phone && otp) {
      mutate();
    }
  };
  return (
    <SignInWrapper>
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
          <div className="tab active">
            <Link
              style={{
                color: "#b01e68",
              }}
              to="/sign-in"
            >
              Giriş
            </Link>
          </div>
          <div className="tab">
            <Link
              style={{
                color: "#b01e68",
              }}
              to="/sign-up"
            >
              Qeydiyyat
            </Link>
          </div>
        </div>
      </div>
      <main>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h5 className="mb-3 text-center text-lg-start">
                Meduza -ya xoş gəlmisiniz! Zəhmət olmasa daxil olun.
              </h5>

              <form onSubmit={onSubmit} className="shadow-sm">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Telefon nömrəsi"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                  {phoneError && <span className="error">{phoneError}</span>}
                </div>
                <div className="form-group mt-4">
                  <div className="otp-input">
                    <input
                      type="text"
                      className="form-control"
                      id="otp"
                      placeholder="SMS Təsdiqləmə Kodu"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    {otpError && <span className="error">{otpError}</span>}
                    <span
                      className={classNames(
                        {
                          "active-otp": validatePhone(phone),
                        },
                        "otp-action-button"
                      )}
                      onClick={handleResend}
                    >
                      {otpLoading ? (
                        <Oval
                          height={18}
                          width={18}
                          color="#b01e68"
                          visible={true}
                          ariaLabel="oval-loading"
                          secondaryColor="#b01e68"
                          strokeWidth={4}
                          strokeWidthSecondary={4}
                        />
                      ) : (
                        <span>
                          {timerActive
                            ? `${timerState} saniyə`
                            : timerFinished
                            ? "Yenidən göndər"
                            : "Göndər"}
                        </span>
                      )}
                    </span>
                  </div>
                </div>
                {signInError && (
                  <div className="alert alert-danger">{signInError}</div>
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
                        color="#b01e68"
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#b01e68"
                        strokeWidth={4}
                        strokeWidthSecondary={4}
                      />
                    ) : (
                      "Daxil ol"
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
                  Yeni üzv? Burada{" "}
                  <Link
                    style={{
                      color: "#b01e68",
                    }}
                    to="/sign-up"
                  >
                    qeydiyyatdan
                  </Link>{" "}
                  keçin
                </span>
              </form>
            </div>
          </div>
        </div>
      </main>

      <BottomBar />
    </SignInWrapper>
  );
};

export default SignIn;
