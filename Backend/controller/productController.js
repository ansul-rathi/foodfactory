const productSchema = require("../models/product");

const productList = (req, res) => {
  const dishes = productSchema
    .find()
    .then((items) => {
      console.log(items);
      return res.send(items);
    })
    .catch(() => {
      return res.send([]);
    });
};

const singleProduct = (req, res) => {
  console.log("request id", req.body.id);
  const dishes = productSchema
    .findOne({ id: req.body.id })
    .then((item) => {
      if (item) {
        console.log(item);
        return res.send(item);
      } else {
        return res.status(404).send({ message: "Product not found" });
      }
    })
    .catch((error) => {
      console.error("Error finding product: ", error);
      return res.status(500).send({ message: "Server error" });
    });
};

module.exports = { productList, singleProduct };
