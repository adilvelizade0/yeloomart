import React, { useEffect } from "react";
import ProfileWrapper from "./Profile.styles.js";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component.jsx";
import MobileNavigator from "../../components/MobileNavigator/MobileNavigator.component.jsx";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb.component.jsx";
import MobileProfile from "../MobileProfile/MobileProfile.page.jsx";
import BottomBar from "../../components/BottomBar/BottomBar.component.jsx";

const Profile = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/sign-in");
    }
  }, [isAuthenticated()]);

  return (
    <ProfileWrapper>
      {isAuthenticated() && (
        <>
          <div className="sticky-top">
            <div
              className="
        d-none d-lg-block
      "
            >
              <Navbar />
            </div>
            <MobileNavigator name="Profil" />
            <Breadcrumb />
          </div>
          <main>
            <div className="d-lg-none">
              <MobileProfile />
            </div>
          </main>
        </>
      )}
      <BottomBar />
    </ProfileWrapper>
  );
};

export default Profile;
