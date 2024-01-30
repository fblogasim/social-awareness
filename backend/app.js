const express = require("express");
const { signupRouter } = require("./routes/signup");
const { loginRouter } = require("./routes/login");
const { initMongo } = require("./infrastructure/mongo");
const cors = require("cors");

const port = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

async function main() {
  await initMongo();

  app.get("/", (req, res) => {
    res.sendStatus(200);
  });

  app.use("/signup", signupRouter);
  app.use("/login", loginRouter);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

main();
