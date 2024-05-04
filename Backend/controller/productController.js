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

module.exports = { productList };
