const { MongoClient } = require("mongodb");
require("dotenv").config();

let client;

async function initMongo() {
  client = new MongoClient(process.env.MONGO_CONNECTION_STRING);
  await client.connect();
  console.log("--- Connected to MongoDB ---");
  return client;
}

async function getUsers() {
  const db = client.db("users");
  const users = await db.collection("users").find({}).toArray();
  return users;
}

async function addUser(user) {
  const db = client.db("users");
  await db.collection("users").insertOne(user);
  const newUser = await db.collection("users").findOne({ email: user.email });
  return newUser;
}

async function getUserByEmail(email) {
  const db = client.db("users");
  const user = await db.collection("users").findOne({ email });
  return user;
}

async function deleteUser(email) {
  const db = client.db("users");
  await db.collection("users").deleteOne({ email });
}

module.exports = {
  initMongo,
  getUsers,
  addUser,
  getUserByEmail,
  deleteUser,
};
