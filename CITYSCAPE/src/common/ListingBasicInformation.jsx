import React from "react";

const ListingBasicInformation = ({ formData, handleInputChange }) => {
  return (
    <>
      <div className="card-item" id="basicInformation">
        <div className="card common-card">
          <div className="card-header">
            <h6 className="title mb-0">Property Basic Information</h6>
          </div>
          <div className="card-body">
            <div className="row gy-4">
              <div className="col-sm-12">
                <label htmlFor="propertyTitle" className="form-label">
                  Property Title
                </label>
                <input
                  type="text"
                  className="common-input"
                  id="propertyTitle"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Property Title"
                />
              </div>
              <div className="col-12">
                <label htmlFor="Description" className="form-label">
                  Description
                </label>
                <textarea
                  className="common-input"
                  id="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="Status" className="form-label">
                  Status
                </label>
                <select
                  id="Status"
                  name="status"
                  className="common-input"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="">Select Status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="Type" className="form-label">
                  Type
                </label>
                <select
                  id="Type"
                  name="type"
                  className="common-input"
                  value={formData.type}
                  onChange={handleInputChange}
                >
                  <option value="">Select Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villas">Villas</option>
                  <option value="Townhouses">Townhouses</option>
                  <option value="Offices">Offices</option>
                  <option value="Warehouses">Warehouses</option>
                  <option value="Commercial Properties">
                    Commercial Properties
                  </option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="OffPlanType" className="form-label">
                  Off Plan Type (optional)
                </label>
                <select
                  id="OffPlanType"
                  name="offPlanType"
                  className="common-input"
                  value={formData.offPlanType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Off Plan Type</option>
                  <option value="Off Plan Projects">Off Plan Projects</option>
                  <option value="Off Plan Apartments">
                    Off Plan Apartments
                  </option>
                  <option value="Off Plan Townhouses">
                    Off Plan Townhouses
                  </option>
                  <option value="Off Plan Villas">Off Plan Villas</option>
                </select>
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="Size" className="form-label">
                  Size (optional)
                </label>
                <input
                  type="number"
                  className="common-input"
                  id="Size"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="Size in Sq Ft"
                />
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="Price" className="form-label">
                  Starting Price (optional)
                </label>
                <input
                  type="number"
                  className="common-input"
                  id="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  placeholder="AED"
                />
              </div>
              <div className="col-sm-6 col-xs-6">
                <label htmlFor="ServiceCharge" className="form-label">
                  Service Charge (optional)
                </label>
                <input
                  type="number"
                  className="common-input"
                  id="ServiceCharge"
                  name="serviceCharge"
                  value={formData.serviceCharge}
                  onChange={handleInputChange}
                  placeholder="Service Charge"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingBasicInformation;
