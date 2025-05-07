import React, { useState, useEffect, useRef } from "react";

const ImageUpload = ({ onChange, reset, existingImages }) => {
  const [images, setImages] = useState(existingImages || []);
  const [removedImages, setRemovedImages] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (reset) {
      setImages([]);
      setRemovedImages([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }, [reset]);

  useEffect(() => {
    setImages(existingImages || []);
  }, [existingImages]);

  const handleImageChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages((prevImages) => {
      const updatedImages = [...prevImages, ...selectedImages];
      onChange(updatedImages, removedImages);
      return updatedImages;
    });
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((_, i) => i !== index);
      const removedImage = prevImages[index];
      setRemovedImages((prevRemovedImages) => [
        ...prevRemovedImages,
        removedImage,
      ]);
      onChange(updatedImages, [...removedImages, removedImage]);
      return updatedImages;
    });
  };

  return (
    <div className="image-uploader">
      <label htmlFor="ImageUploadLabel" className="image-uploader__label">
        <span className="d-none">Upload Image</span>
      </label>
      <input
        type="file"
        className="image-uploader__input"
        id="ImageUploadLabel"
        multiple
        onChange={handleImageChange}
        ref={fileInputRef}
      />
      {images.length > 0 ? (
        <div className="uploaded-images d-flex flex-wrap gap-3">
          {images.map((image, index) => (
            <div className="uploaded-image" key={index}>
              <button
                type="button"
                className="uploaded-image__remove"
                onClick={() => handleRemoveImage(index)}
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src={
                  typeof image === "string"
                    ? `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/${image}`
                    : URL.createObjectURL(image)
                }
                alt={`Image ${index}`}
              />{" "}
            </div>
          ))}
        </div>
      ) : (
        <div className="upload-text">
          <span className="upload-text__icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </span>
          <span className="upload-text__text">
            Drag & Drop files here or click to browse
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
