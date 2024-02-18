const express = require("express");
const { signupRouter } = require("./routes/signup");
const { loginRouter } = require("./routes/login");
const { viewallRouter } = require("./routes/viewall");
const { initMongo } = require("./infrastructure/mongo");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const mongoose = require("mongoose");
require("axios");

const port = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// database connection using built-in express methods
async function main() {
  await initMongo();
}
main();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

//connection to MongoDB using Mongoose
mongoose.connect(
  "mongodb+srv://9dlevel9:QU33nLaT@cluster0.wdqraj0.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//model for the Advertisement collection
const Image = mongoose.model("Image", {
  imageUrl: String,
  title: String,
  description: String,
});

//model for the Campaign collection
const Campaign = mongoose.model("Campaign", {
  imageUrl: String,
  title: String,
  description: String,
  status: String,
});

//POST request API for advertisements
app.post("/postAdvertisement", upload.single("image"), async (req, res) => {
  try {
    const newImage = new Image({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.path,
    });
    await newImage.save();
    res
      .status(201)
      .json({ imageUrl: newImage.imageUrl, title: newImage.title });
  } catch (error) {
    console.log(req.body.title);
    console.error("Error uploading image:", error);
    res.status(500).send("Error uploading image");
  }
});

//POST request API for campaigns
app.post("/postCampaign", upload.single("image"), async (req, res) => {
  try {
    const newCampaign = new Campaign({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.file.path,
      status: req.body.status,
    });
    await newCampaign.save();
    res
      .status(201)
      .json({ imageUrl: newCampaign.imageUrl, title: newCampaign.title });
  } catch (error) {
    console.log(req.body.title);
    console.error("Error uploading image:", error);
    res.status(500).send("Error uploading image");
  }
});

// Route to fetch all advertisements
app.get("/Advertisements", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Error fetching images");
  }
});

// Route to fetch campaigns that are approved
app.get("/campaigns", async (req, res) => {
  try {
    const campaigns = await Campaign.find({ status: "approved" });
    res.json(campaigns);
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    res.status(500).send("Error fetching campaigns");
  }
});

//Route to fetch campaigns that are pending
 app.get("/pendingCampaigns", async (req, res) => {
   try {
     const campaigns = await Campaign.find({ status: "pending" });
     res.json(campaigns);
   } catch (error) {
     console.error("Error fetching campaigns:", error);
     res.status(500).send("Error fetching campaigns");
   }
 });

//application routes
app.use("/signup", signupRouter);
app.use("/login", loginRouter);
app.use("/viewall", viewallRouter);

app.use("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//}

//main();
