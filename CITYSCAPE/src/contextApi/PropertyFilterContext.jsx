import React, { createContext, useState } from 'react';

export const PropertyFilterContext = createContext(); 

const PropertyFilterProvider = ({ children }) => {

    // Filter By Status Code Here
    const [dataStatus, setDataStatus] = useState("All");

    const handleDataStatusChange = (event) => {
        setDataStatus(event.target.value)
    }

    // Filter By Type Code Here
    const [dataType, setDataType] = useState("All");

    const handleDataTypeChange = (event) => {
        setDataType(event.target.value)
    }
    
    // Filter By Bedrooms Code Here
    const [dataBedrooms, setDataBedrooms] = useState("All");

    const handleDataBedroomsChange = (event) => {
        setDataBedrooms(event.target.value)
    }

    // Filter By Bathrooms Code Here
    const [dataBathrooms, setDataBathrooms] = useState("All");

    const handleDataBathroomsChange = (event) => {
        setDataBathrooms(event.target.value)
    }
    
    // Filter By Sorting Code Here
    const [selectedSort, setSelectedSort] = useState("All");

    const handleSortChange = (event) => {
        setSelectedSort(event.target.value);
    }
    
    return (
        <PropertyFilterContext.Provider value={{ 
            selectedSort, setSelectedSort, handleSortChange,
            dataStatus, setDataStatus, handleDataStatusChange, 
            dataType, setDataType, handleDataTypeChange,
            dataBedrooms, setDataBedrooms, handleDataBedroomsChange,
            dataBathrooms, setDataBathrooms, handleDataBathroomsChange,
        }}>
            { children }
        </PropertyFilterContext.Provider>
    );
};

export default PropertyFilterProvider;