const { getUserByEmail } = require("../infrastructure/mongo");

async function loginHandler(req, res) {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);
  if (!user) {
    res.json({ error: "User not found", status: 404 });
    return;
  }
  if (user.password !== password) {
    res.json({ error: "Wrong password", status: 401 });
    return;
  }

  res.json({
    status: 200,
    user: { email: user.email, fullName: user.fullName },
    message: "Logged in successfully!",
  });
}

module.exports = {
  loginHandler,
};
