const loginUser = (req, res) => {
  const { email, password } = req.body;
  res.send("Successfully");
};

module.exports = loginUser;
