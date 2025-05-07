import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListingBasicInformation from "../common/ListingBasicInformation";
import ListingPropertyGallery from "../common/ListingPropertyGallery";
import ListingPropertyInformation from "./ListingPropertyInformation";
import ListingContactDetails from "../common/ListingContactDetails";
import CheckoutForm from "../common/CheckoutForm";
import CheckoutPaymentCard from "../common/CheckoutPaymentCard";
import CardTotalCard from "../common/CardTotalCard";
import { cartItems } from "../data/OthersPageData/OthersPageData";
const AddListingForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const property = location.state?.property;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    type: "",
    price: "",
    serviceCharge: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    city: "Dubai",
    country: "United Arab Emirates",
    area: "",
    amenities: [],
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    images: [],
    totalFloors: "",
    handoverDate: null,
    developer: "",
    underConstruction: "",
    onHandover: "",
    postHandover: "",
  });

  useEffect(() => {
    if (property) {
      setFormData({
        ...property,
        handoverDate: property.handoverDate
          ? new Date(property.handoverDate)
          : null,
        amenities: property.amenities || [],
        images: property.images || [],
      });
    }
  }, [property]);

  const [resetImages, setResetImages] = useState(false);
  const [resetCheckboxes, setResetCheckboxes] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => {
      const updatedValues = checked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value);
      return { ...prevState, [name]: updatedValues };
    });
  };

  const handleImageChange = (newImages, removedImages) => {
    setFormData((prevState) => ({
      ...prevState,
      images: newImages,
      removedImages: removedImages,
    }));
  };

  const handleRemoveImage = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      images: prevState.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataWithImages = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        formData[key].forEach((image) => {
          formDataWithImages.append("images", image);
        });
      } else if (key === "removedImages") {
        formData[key].forEach((image) => {
          formDataWithImages.append("removedImages", image);
        });
      } else {
        // Handle optional fields
        formDataWithImages.append(key, formData[key] || "");
      }
    });

    try {
      const url = property
        ? `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties/${
            property._id
          }`
        : `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`;
      const method = property ? "put" : "post";
      const response = await axios[method](url, formDataWithImages, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(
        `Property ${property ? "updated" : "created"} successfully!`
      );
      setFormData({
        title: "",
        description: "",
        status: "",
        type: "",
        price: "",
        serviceCharge: "",
        size: "",
        bedrooms: "",
        bathrooms: "",
        location: "",
        city: "Dubai",
        country: "United Arab Emirates",
        area: "",
        amenities: [],
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        images: [],
        totalFloors: "",
        handoverDate: null,
        developer: "",
        underConstruction: "",
        onHandover: "",
        postHandover: "",
      });
      setResetImages(true);
      setResetCheckboxes(true);
      setTimeout(() => {
        setResetImages(false);
        setResetCheckboxes(false);
      }, 0);
      navigate("/account");
    } catch (error) {
      console.error("Error creating/updating property:", error.response.data);
      toast.error(
        `Error ${
          property ? "updating" : "creating"
        } property. Please try again.`
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ListingBasicInformation
          id="basicInformation"
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <ListingPropertyGallery
          id="propertyGallery"
          handleImageChange={handleImageChange}
          reset={resetImages}
          existingImages={formData.images}
        />
        <ListingPropertyInformation
          id="propertyInformation"
          formData={formData}
          handleInputChange={handleInputChange}
          handleCheckboxChange={handleCheckboxChange}
          reset={resetCheckboxes}
        />
        <CheckoutForm
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <ListingContactDetails
          id="propertyContactDetails"
          formData={formData}
          handleInputChange={handleInputChange}
        />
        <button type="submit" className="btn btn-main w-100">
          {property ? "Update Property" : "Submit Property"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default AddListingForm;
