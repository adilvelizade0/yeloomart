import { useState, useEffect } from "react";
import SignInWrapper from "./SignIn.styles.js";
import BottomBar from "../../../components/BottomBar/BottomBar.component.jsx";
import Navbar from "../../../components/Navbar/Navbar.component.jsx";
import MobileNavigator from "../../../components/MobileNavigator/MobileNavigator.component.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb.component.jsx";
import { useIsAuthenticated } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import parsePhoneNumber, {
  isPossiblePhoneNumber,
  isValidPhoneNumber,
} from "libphonenumber-js";
import classNames from "classnames";

const SignIn = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/profile");
    }
  }, [isAuthenticated]);
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
    setOtpError(null);
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

    if (!otp) {
      setOtpError("SMS Təsdiqləmə Kodu boş ola bilməz");
    }

    if (phoneIsValid && phone && otp) {
      alert("Giriş uğurla başa çatdı");
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
            <Link to="/sign-in">Giriş</Link>
          </div>
          <div className="tab">
            <Link to="/sign-up">Qeydiyyat</Link>
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
                    >
                      Göndər
                    </span>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <button type="submit" className="btn btn-primary">
                    Giriş
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
                  Yeni üzv? Burada <Link to="/sign-up">qeydiyyatdan</Link> keçin
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
