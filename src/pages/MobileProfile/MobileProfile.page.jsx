import React from "react";
import MobileProfileWrapper from "./MobileProfile.styles.jsx";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import {
  BsBoxSeam,
  BsStar,
  BsHeart,
  BsGeoAlt,
  BsPerson,
  BsFileEarmarkText,
} from "react-icons/bs";
import { VscSignOut } from "react-icons/vsc";
import { SlQuestion } from "react-icons/sl";

const MobileProfile = () => {
  const authUser = useAuthUser();
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  return (
    isAuthenticated() && (
      <MobileProfileWrapper>
        <div
          style={{
            background: "linear-gradient(315deg, #f39f86 0%, #f9d976 74%)",
          }}
          className="p-2 w-100 text-center"
        >
          <span className="text-light">
            Salam, <strong>{authUser()?.username}</strong> xoş gəlmisiniz!
          </span>
        </div>
        <div>
          <ul className="profile-menu">
            <li className="d-flex align-items-center">
              <BsBoxSeam size={16} className="me-2" />
              <span>Mənim sifarişlərim</span>
            </li>
            <li className="d-flex align-items-center">
              <BsHeart size={16} className="me-2" />
              <span>Mənim sevimlilərim</span>
            </li>
            <li className="d-flex align-items-center">
              <BsStar size={16} className="me-2" />
              <span>Mənim rəylərim</span>
            </li>
            <li className="d-flex align-items-center">
              <BsGeoAlt size={16} className="me-2" />
              <span>Adreslərim</span>
            </li>
            <li className="d-flex align-items-center">
              <BsPerson size={16} className="me-2" />
              <span>Profil məlumatları</span>
            </li>
            <li className="d-flex align-items-center">
              <BsFileEarmarkText size={16} className="me-2" />
              <span>Policies</span>
            </li>
            <li>
              <SlQuestion size={16} className="me-2" />
              <span>Yardım</span>
            </li>
            <li className="d-flex align-items-center" onClick={signOut}>
              <VscSignOut size={16} className="me-2" />
              <span>Çıxış et</span>
            </li>
          </ul>
        </div>
      </MobileProfileWrapper>
    )
  );
};

export default MobileProfile;
