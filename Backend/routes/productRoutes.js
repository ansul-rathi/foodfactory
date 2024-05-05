const express = require("express");
const {
  productList,
  singleProduct,
} = require("../controller/productController");

const router = express.Router();

router.get("/products", productList);
router.post("/singleproduct", singleProduct);

module.exports = router;
