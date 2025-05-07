import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AccountDetailsTab = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
      } catch (error) {
        toast.error("Error fetching profile data");
      }
    };

    fetchProfile();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/api/auth/update-profile`,
        { name, email, phone },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error updating profile");
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("New password and confirm password do not match");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_BASE_URL
        }/api/auth/change-password`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error changing password");
    }
  };

  return (
    <>
      <p className="account-alert">
        The new email address will be used as your login credential.
      </p>
      <form onSubmit={handleProfileUpdate}>
        <div className="card common-card mb-4">
          <div className="card-body">
            <h6 className="loginRegister__title text-poppins">
              Personal Information
            </h6>

            <div className="row gy-lg-4 gy-3">
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="FirstNamee" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="common-input"
                  value={name}
                  placeholder="First Name"
                  id="FirstNamee"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col-sm-6 col-xs-6">
                <label htmlFor="DisplayEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="common-input"
                  placeholder="Display Email"
                  value={email}
                  id="DisplayEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-sm-6 col-xs-6">
                <label htmlFor="Phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="common-input"
                  placeholder="Enter Your Phone"
                  id="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="col-12">
                <button type="submit" className="btn btn-main w-100">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <form onSubmit={handleChangePassword}>
        <div className="card common-card">
          <div className="card-body">
            <h6 className="loginRegister__title text-poppins">
              Password Change
            </h6>

            <div className="row gy-lg-4 gy-3">
              <div className="col-12">
                <label htmlFor="current-password" className="form-label">
                  Current Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    className="common-input"
                    placeholder="Password"
                    id="current-password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                  <span
                    className="password-show-hide fas fa-eye toggle-password la-eye-slash"
                    id="#current-password"
                  ></span>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="new-password" className="form-label">
                  New Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    className="common-input"
                    placeholder="Password"
                    id="new-password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  <span
                    className="password-show-hide fas fa-eye toggle-password la-eye-slash"
                    id="#new-password"
                  ></span>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="confirm-password" className="form-label">
                  Confirm Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    className="common-input"
                    placeholder="Password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <span
                    className="password-show-hide fas fa-eye toggle-password la-eye-slash"
                    id="#confirm-password"
                  ></span>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-main w-100">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AccountDetailsTab;
