import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const NewsletterForm = ({ propertyTitle }) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      imA: "",
      message: `Hello, I am interested in [${propertyTitle}]`,
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Your Email is not valid! Provide valid email")
        .required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      try {
        await axios.post(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/email/send-newsletter`,
          values,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        resetForm();
        toast.success("Congratulations! You Have Submitted Successfully.", {
          theme: "colored",
        });
      } catch (error) {
        toast.error("Something went wrong! Your message didn't send.", {
          theme: "colored",
        });
      } finally {
        setLoading(false);
      }
    },
  });

  const renderEmailError = formik.touched.email && formik.errors.email && (
    <span className="text-danger text-start d-block">
      {formik.errors.email}
    </span>
  );

  return (
    <>
      <ToastContainer />
      <style>
        {`
          .form-row {
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }
          .form-group {
            padding-right: 15px;
            padding-left: 15px;
            margin-bottom: 1rem;
          }
          .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .custom-select {
            position: relative;
          }
          .custom-select select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: url('data:image/svg+xml;utf8,<svg fill="none" stroke="%23333" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6 9l6 6 6-6"></path></svg>') no-repeat right 10px center;
            background-color: #fff;
            padding-right: 30px;
          }
          @media (max-width: 576px) {
            .custom-select select {
              background-size: 8px;
              padding-right: 25px;
            }
          }
          .form-group.col-md-12 textarea {
            height: 150px; /* Adjust this value as needed */
          }
          @media (max-width: 576px) {
            .form-group.col-md-12 textarea {
              height: 200px; /* Adjust this value as needed for smaller screens */
            }
          }
        `}
      </style>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
              {...formik.getFieldProps("name")}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              required
              {...formik.getFieldProps("email")}
            />
            {renderEmailError}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Enter your phone number"
              required
              {...formik.getFieldProps("phone")}
            />
          </div>
          <div className="form-group col-md-6 custom-select">
            <label htmlFor="imA">I'm a</label>
            <select
              id="imA"
              name="imA"
              className="form-control"
              required
              {...formik.getFieldProps("imA")}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="buyer">I'm a buyer</option>
              <option value="tenant">I'm a tenant</option>
              <option value="agent">I'm an agent</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              placeholder="Enter your message"
              required
              {...formik.getFieldProps("message")}
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-main text-uppercase flex-shrink-0"
          disabled={loading}
        >
          {loading ? "Sending..." : "Request Information"}
        </button>
      </form>
    </>
  );
};

export default NewsletterForm;