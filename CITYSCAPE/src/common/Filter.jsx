import React, { useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PropertyFilterContext } from "../contextApi/PropertyFilterContext";

const Filter = (props) => {
  const {
    dataType,
    handleDataTypeChange,
    dataLocation,
    handleDataLocationChange,
  } = useContext(PropertyFilterContext);
  const navigate = useNavigate();

  // Input Field Validation Start
  const formik = useFormik({
    initialValues: {
      searchKeyword: "",
      bedrooms: "",
      area: "", // Added area field
    },
    // Validate by Yup
    validationSchema: yup.object({
      searchKeyword: yup
        .string()
        .min(3, "Too Short! Must be at least 3 characters long")
        .required(),
      bedrooms: yup.number().when("isCommercial", {
        is: false,
        then: yup.number().required("Please select the number of bedrooms"),
      }),
      area: yup.string().required("Please enter the area"), // Added validation for area
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              searchKeyword: values.searchKeyword,
              bedrooms: values.bedrooms,
              area: values.area, // Added area to params
            },
          }
        );
        console.log(response.data);
        resetForm({ values: "" });
        toast.success("Congratulations! You Have Searched Successfully.", {
          theme: "colored",
        });

        // Navigate To Property Page
        navigate("/property-sidebar");
      } catch (error) {
        console.error("Error fetching properties:", error);
        toast.error("Error fetching properties. Please try again.", {
          theme: "colored",
        });
      }
    },
  });

  const renderNameError = formik.touched.searchKeyword &&
    formik.errors.searchKeyword && (
      <span className="text-danger">{formik.errors.searchKeyword}</span>
    );

  const renderBedroomsError = formik.touched.bedrooms &&
    formik.errors.bedrooms && (
      <span className="text-danger">{formik.errors.bedrooms}</span>
    );

  const renderAreaError = formik.touched.area && formik.errors.area && (
    <span className="text-danger">{formik.errors.area}</span>
  );
  // Input Field Validation End

  const projectTypes = [
    "All",
    "Building",
    "Villa",
    "Compound",
    "Labour Camp",
    "Warehouse",
    "Sub Community",
  ];
  const commercialTypes = [
    "All",
    "Office",
    "Retail",
    "Store",
    "Parking",
    "Warehouse",
    "Labor Camp",
    "Commercial Floor",
    "Villa",
    "Whole Building",
    "Shop",
  ];
  const residentialTypes = [
    "All",
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
    "Residential Floor",
    "Whole Building",
    "Loft",
    "Hotel apartment",
  ];
  const projectStatus = [
    "All",
    "Upcoming",
    "Under construction",
    "Completed",
  ];

  return (
    <>
      <ToastContainer />
      <div className="filter">
        <form action="#" onSubmit={formik.handleSubmit}>
          <div className="row gy-sm-4 gy-3">
            <div className="col-lg-2 col-sm-6 col-xs-6">
              <div className="select-has-icon icon-black">
                <select
                  className="select common-input"
                  value={props.isNewProjects ? dataType : dataLocation}
                  onChange={props.isNewProjects ? handleDataTypeChange : handleDataLocationChange}
                >
                  <option value="" disabled>
                    {props.isNewProjects ? "Project Type" : "Want to"}
                  </option>
                  {props.isNewProjects
                    ? projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))
                    : [
                        <option key="1" value="">
                          Want to
                        </option>,
                        <option key="2" value="Buy">
                          Buy
                        </option>,
                        <option key="3" value="Rent">
                          Rent
                        </option>,
                      ]}
                </select>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6">
              <div className="select-has-icon icon-black">
                <select
                  className="select common-input"
                  value={props.isNewProjects ? dataType : dataLocation}
                  onChange={handleDataTypeChange}
                >
                  <option value="">
                    {props.isNewProjects ? "Project Status" : "Type"}
                  </option>
                  {props.isNewProjects
                    ? projectStatus.map((status, index) => (
                        <option key={index} value={status}>
                          {status}
                        </option>
                      ))
                    : props.isCommercial
                    ? commercialTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))
                    : residentialTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                </select>
              </div>
            </div>
            {!props.isCommercial && (
              <div className="col-lg-2 col-sm-6 col-xs-6">
                <div className="select-has-icon icon-black">
                <select
                    name="bedrooms"
                    id="bedrooms"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bedrooms}
                    className={`common-input ${
                      formik.touched.bedrooms && formik.errors.bedrooms
                        ? "is-invalid"
                        : ""
                    }`}
                  >
                    <option value="" disabled>
                      Bedrooms
                    </option>
                    <option value="Studio">Studio</option>
                    <option value="1 Bedroom">1 Bedroom</option>
                    <option value="2 Bedrooms">2 Bedrooms</option>
                    <option value="3 Bedrooms">3 Bedrooms</option>
                    <option value="4 Bedrooms">4 Bedrooms</option>
                    <option value="+5 Bedrooms">+5 Bedrooms</option>
                  </select>
                  {/* {renderBedroomsError} */}
                </div>
              </div>
            )}
            <div className="col-lg-2 col-sm-6 col-xs-6">
              <input
                type="text"
                name="area"
                id="area"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.area}
                className={`common-input ${
                  formik.touched.area && formik.errors.area ? "is-invalid" : ""
                }`}
                placeholder="Area"
              />
              {renderAreaError}
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-6">
              <button type="submit" className="btn btn-main w-100">
                {props.buttonText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;