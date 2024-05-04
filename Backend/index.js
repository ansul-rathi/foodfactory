const express = require("express");

// const dotenv = require("dotenv");

const app = express();
// dotenv.config();

const PORT = 7000;
const MONGOURL = "mongodb://localhost:27017/food-chain";

app.use(express.json());
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("database is connected");
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(console.log(error)));

// const userSchema = new mongoose.Schema({
//   name: String,
//   img: String,
//   category: String,
//   price: Number,
//   quantity: Number,
// });

// const UserModel = mongoose.model("users", userSchema);

// const dishes = UserModel.find({ id: 14 }).then((items) => {
//   console.log(items);
// });

// app.get("/getUsers", async (req, res) => {
//   // const userDate = await UserModel.find({}).then((items) => {
//   //   console.log(items);
//   // });
//   const userDate = await UserModel.find();

//   res.json(userDate);
// });

const user = require("./routes/userRoutes");
const products = require("./routes/productRoutes");
app.use("/api", user);
app.use("/api", products);
