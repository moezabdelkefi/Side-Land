// backend/models/Property.js
const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number },
  serviceCharge: { type: Number },
  size: { type: Number },
  bedrooms: { type: [String], default: [], required: true },
  bathrooms: { type: Number, required: true },
  location: { type: String, required: true },
  city: { type: String, default: "Dubai" },
  country: { type: String, default: "United Arab Emirates" },
  area: { type: String },
  amenities: {
    type: [String],
    default: [],
  },
  contactName: { type: String },
  contactEmail: { type: String },
  contactPhone: { type: String },
  images: [{ type: String }],
  totalFloors: { type: Number },
  handoverDate: { type: Date },
  developer: { type: String },
  underConstruction: { type: Number, required: true },
  onHandover: { type: Number, required: true },
  postHandover: { type: Number, required: true },
  offPlanType: { type: String },
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;