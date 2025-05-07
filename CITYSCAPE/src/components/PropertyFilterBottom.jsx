import React, { useContext, useEffect, useState } from "react";
import ListGridButtons from "../common/ListGridButtons";
import { PropertyFilterContext } from "../contextApi/PropertyFilterContext";
import axios from "axios";

const PropertyFilterBottom = () => {
  const { selectedSort, handleSortChange } = useContext(PropertyFilterContext);
  const [totalProperties, setTotalProperties] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage, setPropertiesPerPage] = useState(10);

  useEffect(() => {
    const fetchPropertiesData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/api/properties`,
          {
            params: {
              page: currentPage,
              limit: propertiesPerPage,
            },
          }
        );
        setTotalProperties(response.data.total);
      } catch (error) {
        console.error("Error fetching properties data:", error);
      }
    };

    fetchPropertiesData();
  }, [currentPage, propertiesPerPage]);

  return (
    <>
      <div className="property-filter__bottom flx-between gap-2">
        <span className="property-filter__text font-18 text-gray-800">
          Showing {propertiesPerPage * (currentPage - 1) + 1}-
          {Math.min(propertiesPerPage * currentPage, totalProperties)} of{" "}
          {totalProperties}
        </span>

        <div className="d-flex align-items-center gap-2">
          <span className="property-filter__text font-18 text-gray-800">
            Sort by:
          </span>
          <div className="select-has-icon data-sort">
            <select
              className="form-select common-input pill text-gray-800 px-3 py-2"
              onChange={handleSortChange}
              value={selectedSort}
            >
              <option value="All">All</option>
              <option value="Newest">Newest</option>
              <option value="High Price">High Price</option>
              <option value="Medium Price">Medium Price</option>
              <option value="Low Price">Low Price</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyFilterBottom;
