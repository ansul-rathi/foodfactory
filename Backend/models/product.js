const mongoose = require("mongoose");

const productSchema = mongoose.model("users", {
  id: { type: Number },
  name: { type: String, require: true },
  img: { type: String, require: true },
  category: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

module.exports = productSchema;
