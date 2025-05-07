import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import LoginRegisterThumb from "/assets/images/thumbs/login-img.avif?url";

const LoginRegister = ({
  titleText,
  firstNameCol,
  showFirstName,
  lastNameCol,
  showLastName,
  passwordCol,
  showConfirm,
  btnText,
  showForgotRemember,
  showTermCondition,
  haveAccountText,
  haveAccountLink,
  haveAccountLinkText,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Navigate to Account Page
  const navigate = useNavigate();

  // **************************** Form Validation Start ************************
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Your Email is not valid! Provide valid email")
        .required(),
      password: yup
        .string()
        .min(5, "Password must be 5 characters long")
        .required("Password is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/auth/login`,
          values
        );
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        if (user.role === "admin") {
          navigate("/account");
        } else {
          toast.error("Access denied. Admins only.", {
            theme: "colored",
          });
        }
        toast.success("Login successful!", {
          theme: "colored",
        });
      } catch (error) {
        toast.error("Login failed. Please check your credentials.", {
          theme: "colored",
        });
      }
    },
  });

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span className="text-danger">{formik.errors.email}</span>
  );
  const renderPasswordError = formik.touched.password &&
    formik.errors.password && (
      <span className="text-danger">{formik.errors.password}</span>
    );

  return (
    <>
      <ToastContainer />
      <section className="loginRegister padding-y-120">
        <div className="container container-two">
          <div className="loginRegister-box card common-card">
            <div className="card-body">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="loginRegister-thumb rounded overflow-hidden me-lg-2 d-flex h-100">
                    <img src={LoginRegisterThumb} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="loginRegister-content">
                    <form onSubmit={formik.handleSubmit} method="POST">
                      <h3 className="loginRegister__title text-poppins">
                        {titleText} to Grow and More
                      </h3>
                      <p className="loginRegister__desc mb-4 font-18">
                        Sign in to access your personalized real estate
                        dashboard, view properties, and manage your listings
                        effortlessly.
                      </p>

                      <div className="row gy-lg-4 gy-3">
                        <div className="col-12">
                          <label htmlFor="Email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            id="Email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            className={`common-input ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {renderEmailError}
                        </div>
                        <div className={passwordCol}>
                          <label htmlFor="your-password" className="form-label">
                            Password
                          </label>
                          <div className="position-relative">
                            <input
                              type={`${showPassword ? "text" : "password"}`}
                              placeholder="Password"
                              name="password"
                              id="your-password"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={formik.values.password}
                              className={`common-input ${
                                formik.touched.password &&
                                formik.errors.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                            />
                            <span
                              className={`password-show-hide ${
                                showPassword
                                  ? "fas fa-eye "
                                  : "fas fa-eye-slash"
                              } `}
                              onClick={() => handleShowPassword()}
                            >
                              {" "}
                            </span>
                          </div>
                          {renderPasswordError}
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-main w-100">
                            {btnText}
                            <span className="icon-right">
                              {" "}
                              <i className="far fa-paper-plane"></i>{" "}
                            </span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginRegister;

