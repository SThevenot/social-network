/** @format */

const connection = require("../config/connection");
const { User, Application } = require("../models");
const {
  getRandomName,
  getRandomApplications,
  getRandomEmail,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");
  await Application.deleteMany({});
  await User.deleteMany({});

  const users = [];
  const applications = getRandomApplications(4);

  for (let i = 0; i < 10; i++) {
    const username = getRandomName;
    const email = getRandomEmail;
    users.push({
      username,
      email,
    });
  }
  await User.collection.insertMany(users);
  await Application.collection.insertMany(applications);

  console.table(users);
  console.table(applications);
  console.info("seeding complete!");
  process.exit(0);
});
