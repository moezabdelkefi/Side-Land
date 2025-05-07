import React, { useEffect, useState } from "react";
import Pagination from "../common/Pagination";
import { getProperties, deleteProperty } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AccountMyPropertyTab = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit] = useState(10); // Number of properties per page
  const navigate = useNavigate();

  const handleEdit = (property) => {
    navigate("/add-new-listing", { state: { property } });
  };
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await getProperties(currentPage, limit);
        setProperties(data.properties || []);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (error) {
        console.error("Error fetching properties:", error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, [currentPage, limit]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = async (propertyId) => {
    try {
      await deleteProperty(propertyId);
      toast.success("Property deleted successfully!");
      setProperties(
        properties.filter((property) => property._id !== propertyId)
      );
    } catch (error) {
      toast.error("Error deleting property. Please try again.");
    }
  };

  return (
    <>
      <div className="overflow-auto">
        <div className="card common-card min-w-maxContent">
          <div className="card-body">
            <table className="table style-two">
              <thead>
                <tr>
                  <th>My Properties</th>
                  <th>Date Added</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {properties.map((property, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <div className="cart-item__thumb">
                          <img
                            src={`${
                              import.meta.env.VITE_REACT_APP_API_BASE_URL
                            }/${property.images[0]}`}
                            alt=""
                          />
                        </div>
                        <div className="cart-item__content">
                          <h6 className="cart-item__title fw-500 font-18">
                            <Link
                              to={`/property/${property._id}`}
                              className="link"
                            >
                              {property.title}
                            </Link>
                          </h6>
                          <p className="property-item__location d-flex gap-2 font-14">
                            <span className="icon text-gradient">
                              {" "}
                              <i className="fas fa-map-marker-alt"></i>
                            </span>
                            {property.location}
                          </p>
                          <span className="cart-item__price">
                            Price:{" "}
                            <span className="fw-500 text-heading">
                              {property.price}
                            </span>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>
                      {" "}
                      <span className="date">
                        {new Date(property.handoverDate).toLocaleDateString()}
                      </span>{" "}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="rounded-btn edit-btn text-info bg-info m-auto bg-opacity-10 flex-shrink-0"
                        onClick={() => handleEdit(property)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="rounded-btn delete-btn text-danger bg-danger bg-opacity-10 flex-shrink-0"
                        onClick={() => handleDelete(property._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default AccountMyPropertyTab;
