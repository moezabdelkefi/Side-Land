import React from "react";

const CheckoutForm = ({ formData, handleInputChange }) => {
  return (
    <div className="card-item" id="PaymentSchedule">
      <div className="card common-card">
        <div className="card-header">
          <h6 className="title mb-0">Payment plan</h6>
        </div>
        <div className="card-body">
          <div className="row gy-4">
            <div className="col-sm-4 col-xs-6">
              <label htmlFor="UnderConstruction" className="form-label">
                Under Construction (%)
              </label>
              <input
                type="number"
                className="common-input"
                id="UnderConstruction"
                name="underConstruction"
                value={formData.underConstruction}
                onChange={handleInputChange}
                placeholder="Enter percentage"
                min="0"
                max="100"
              />
            </div>
            <div className="col-sm-4 col-xs-6">
              <label htmlFor="OnHandover" className="form-label">
                On Handover (%)
              </label>
              <input
                type="number"
                className="common-input"
                id="OnHandover"
                name="onHandover"
                value={formData.onHandover}
                onChange={handleInputChange}
                placeholder="Enter percentage"
                min="0"
                max="100"
              />
            </div>
            <div className="col-sm-4 col-xs-6">
              <label htmlFor="PostHandover" className="form-label">
                Post Handover (Years)
              </label>
              <input
                type="number"
                className="common-input"
                id="PostHandover"
                name="postHandover"
                value={formData.postHandover}
                onChange={handleInputChange}
                placeholder="Enter years"
                min="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
