const loginUser = (req, res) => {
  const { email, password } = req.body;
  if (email === "princerathi2000@gmail.com") {
    res.send("Successfull");
  } else {
    res.send("Email not matched");
  }
};

module.exports = { loginUser };
