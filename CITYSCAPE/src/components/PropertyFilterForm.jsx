// CITYSCAPE/src/components/PropertyFilterForm.jsx
import React, { useContext, useEffect } from "react";
import { PropertyFilterContext } from "../contextApi/PropertyFilterContext";
import { useLocation } from "react-router-dom";

const PropertyFilterForm = () => {
  const {
    dataStatus,
    handleDataStatusChange,
    dataType,
    handleDataTypeChange,
    dataBedrooms,
    handleDataBedroomsChange,
    dataBathrooms,
    handleDataBathroomsChange,
    setDataStatus,
  } = useContext(PropertyFilterContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("rent")) {
      setDataStatus("For Rent");
    } else if (location.pathname.includes("buy")) {
      setDataStatus("For Buy");
    } else {
      setDataStatus("All");
    }
  }, [location.pathname, setDataStatus]);

  return (
    <>
      <form action="#">
        <div className="row gy-4">
          <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
            <div className="select-has-icon">
              <select
                className="form-select common-input common-input--withLeftIcon pill text-gray-800"
                onChange={handleDataStatusChange}
                value={dataStatus}
              >
                <option value="Status" disabled defaultValue>
                  Status
                </option>
                <option value="All">All</option>
                <option value="For Sell">For Sell</option>
                <option value="For Buy">For Buy</option>
                <option value="For Rent">For Rent</option>
              </select>
              <span className="input-icon input-icon--left text-gradient">
                <i className="fas fa-info-circle"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="select-has-icon">
              <select
                className="form-select common-input common-input--withLeftIcon pill text-gray-800"
                onChange={handleDataTypeChange}
                value={dataType}
              >
                <option value="Type" disabled defaultValue>
                  Type
                </option>
                <option value="All">All</option>
                <option value="Apartment">Apartment</option>
                <option value="Villas">Villas</option>
                <option value="Townhouses">Townhouses</option>
                <option value="Offices">Offices</option>
                <option value="Warehouses">Warehouses</option>
              </select>
              <span className="input-icon input-icon--left text-gradient">
                <i className="fas fa-building"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
            <div className="select-has-icon">
              <select
                className="form-select common-input common-input--withLeftIcon pill text-gray-800"
                onChange={handleDataBedroomsChange}
                value={dataBedrooms}
              >
                <option value="Bedrooms" disabled defaultValue>
                  Bedrooms
                </option>
                <option value="All">All</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <span className="input-icon input-icon--left text-gradient">
                <i className="fas fa-bed"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
            <div className="select-has-icon">
              <select
                className="form-select common-input common-input--withLeftIcon pill text-gray-800"
                onChange={handleDataBathroomsChange}
                value={dataBathrooms}
              >
                <option value="Bathrooms" disabled defaultValue>
                  Bathrooms
                </option>
                <option value="All">All</option>
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>
              <span className="input-icon input-icon--left text-gradient">
                <i className="fas fa-bath"></i>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PropertyFilterForm;
