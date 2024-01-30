const { addUser, getUserByEmail } = require("../infrastructure/mongo");

async function signupHandler(req, res) {
  const { fullName, email, password } = req.body;

  const userExists = await getUserByEmail(email);
  if (userExists) {
    res.json({ error: `User with ${email}  already exists!`, code: 409 });
    return;
  }

  const user = await addUser({ fullName, email, password });
  if (!user) {
    res.json({ error: "Failed to insert a new user details!", code: 500 });
    return;
  }
  res.json({ status: 200, user });
}

module.exports = {
  signupHandler,
};
