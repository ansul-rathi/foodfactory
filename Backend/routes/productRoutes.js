const express = require("express");
const { productList } = require("../controller/productController");

const router = express.Router();

router.get("/products", productList);

module.exports = router;
