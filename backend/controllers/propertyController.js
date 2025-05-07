const Property = require("../models/Property");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

exports.uploadImages = upload.array("images", 10);

exports.createProperty = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      type,
      price,
      serviceCharge,
      size,
      bedrooms,
      bathrooms,
      location,
      city,
      country,
      area,
      amenities,
      contactName,
      contactEmail,
      contactPhone,
      totalFloors,
      handoverDate,
      developer,
      underConstruction,
      onHandover,
      postHandover,
      offPlanType,
    } = req.body;

    const property = new Property({
      title,
      description,
      status,
      type,
      price,
      serviceCharge,
      size: size || undefined,
      bedrooms: Array.isArray(bedrooms) ? bedrooms : bedrooms.split(","),
      bathrooms,
      location,
      city,
      country,
      area,
      amenities: amenities.split(","),
      contactName,
      contactEmail,
      contactPhone,
      images: req.files.map((file) => file.path),
      totalFloors,
      handoverDate,
      developer,
      underConstruction,
      onHandover,
      postHandover,
      offPlanType,
    });

    await property.save();
    res.status(201).json(property);
  } catch (err) {
    res.status(400).json({ message: "Error creating property", error: err });
  }
};

exports.getProperties = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      type,
      bedrooms,
      bathrooms,
      sort,
      offPlanType,
      ready,
    } = req.query;
    const query = {};

    if (status && status !== "All") {
      query.status = status;
    }
    if (type && type !== "All") {
      query.type = type;
    }
    if (bedrooms && bedrooms !== "All") {
      query.bedrooms = { $in: bedrooms.split(",") };
    }
    if (bathrooms && bathrooms !== "All") {
      query.bathrooms = parseInt(bathrooms, 10);
    }
    if (offPlanType) {
      query.offPlanType = offPlanType;
    }
    if (ready) {
      query.offPlanType = { $ne: "Off Plan" };
    }

    let sortOption = {};
    if (sort) {
      switch (sort) {
        case "Newest":
          sortOption = { createdAt: -1 };
          break;
        case "High Price":
          sortOption = { price: -1 };
          break;
        case "Low Price":
          sortOption = { price: 1 };
          break;
        default:
          sortOption = {};
      }
    }

    const properties = await Property.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Property.countDocuments(query);

    res.status(200).json({
      properties,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
    });
  } catch (err) {
    res.status(400).json({ message: "Error fetching properties", error: err });
  }
};

exports.getProperty = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ message: "Error fetching property", error: err });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const updateData = { ...req.body };

    const existingProperty = await Property.findById(req.params.id);
    if (!existingProperty) {
      return res.status(404).json({ message: "Property not found" });
    }

    if (req.files && req.files.length > 0) {
      const newImages = req.files.map((file) => file.path);
      updateData.images = [...existingProperty.images, ...newImages];
    } else {
      updateData.images = existingProperty.images;
    }

    if (req.body.removedImages) {
      const removedImages = req.body.removedImages.split(",");
      updateData.images = updateData.images.filter(
        (image) => !removedImages.includes(image)
      );
    }

    if (req.body.amenities) {
      updateData.amenities = Array.isArray(req.body.amenities)
        ? req.body.amenities
        : req.body.amenities.split(",");
    }

    if (req.body.bedrooms) {
      updateData.bedrooms = Array.isArray(req.body.bedrooms)
        ? req.body.bedrooms
        : req.body.bedrooms.split(",");
    }

    // Ensure all fields are updated, even if they are set to empty or null
    Object.keys(updateData).forEach((key) => {
      if (
        updateData[key] === undefined ||
        updateData[key] === null ||
        updateData[key] === ""
      ) {
        updateData[key] = undefined;
      }
    });

    const property = await Property.findByIdAndUpdate(
      req.params.id,
      {
        $set: updateData,
        $unset: Object.keys(updateData).reduce((acc, key) => {
          if (updateData[key] === undefined) {
            acc[key] = "";
          }
          return acc;
        }, {}),
      },
      { new: true }
    );

    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ message: "Error updating property", error: err });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Error deleting property", error: err });
  }
};