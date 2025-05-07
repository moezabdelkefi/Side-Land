import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../common/Logo";

const AccountProfileTab = () => {
  const [profile, setProfile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No token found");
        }

        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/auth/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data);
        setProfileImage(response.data.profileImage);
      } catch (error) {
        toast.error("Error fetching profile data");
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("profileImage", file);

    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/auth/profile-image`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setProfileImage(response.data.profileImage);
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error updating profile image");
    }
  };

  if (!profile) {
    return (
      <div className="loading-logo-container">
        <Logo />
        <style>
          {`
            .loading-logo-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <>
      <div className="card common-card mb-4">
        <div className="card-body">
          <div className="profile-info d-flex gap-4 align-items-center">
            <div className="profile-info__thumb">
              <img
                src={`${
                  import.meta.env.VITE_REACT_APP_API_BASE_URL
                }/${profileImage}`}
                alt="Profile"
                onClick={() => fileInputRef.current.click()}
                style={{ cursor: "pointer" }}
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </div>
            <div className="profile-info__content">
              <span className="mb-1 fw-semibold text-main text-poppins font-13">
                Agent of Property
              </span>
              <h4 className="profile-info__title text-poppins mb-4">
                {profile.name}
              </h4>
              <div className="contact-info d-flex gap-3 align-items-center mb-2">
                <span className="contact-info__icon text-gradient">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="contact-info__address">{profile.email}</span>
              </div>
              <div className="contact-info d-flex gap-3 align-items-center mb-2">
                <span className="contact-info__icon text-gradient">
                  <i className="fas fa-user"></i>
                </span>
                <span className="contact-info__address">{profile.role}</span>
              </div>
              <div className="contact-info d-flex gap-3 align-items-center mb-2">
                <span className="contact-info__icon text-gradient">
                  <i className="fas fa-phone"></i>
                </span>
                <span className="contact-info__address">{profile.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountProfileTab;
