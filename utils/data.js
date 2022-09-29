/** @format */

const names = [
  "Sarah",
  "Kamary",
  "Zachary",
  "Connor",
  "Hannah",
  "Benjamin",
  "Anthony",
  "Michaela",
  "Erik",
  "Matthew",
  "Justin",
];

const emails = [
  "123@gmail.com",
  "doglover@gmail.com",
  "catsarebetter@yahoo.com",
  "whyamihear@gmail.com",
  "ilikepie@yahoo.com",
  "2468@yahoo.com",
  "cokeisbetterthanpepsi@gmail.com",
  "iambored@gmail.com",
  "slddnsndsiuh@yahoo.com",
  "kjfkna@gmail.com",
];

const appDescriptions = [
  "Pet Tracker",
  "Anime Reccomendations",
  "Ad Blockers",
  "Crypto Trading",
];

const potentialTags = [
  "html",
  "css",
  "js",
  "mongodb",
  "sql",
  "express",
  "react",
];

const users = [];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomName = () => `${getRandomArrItem(names)}`;

const getRandomEmail = () => `${getRandomArrItem(emails)}`;

const getRandomApplications = (int) => {
  let results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      published: Math.random() < 0.5,
      description: getRandomArrItem(appDescriptions),
      buildSuccess: Math.random() < 0.5,
      tags: [...getApplicationTags(3)],
    });
  }
  return results;
};

const getApplicationTags = (int) => {
  if (int === 1) {
    return getRandomArrItem(potentialTags);
  }
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      tagBody: getRandomArrItem(potentialTags),
      username: getRandomName(),
    });
  }
  return results;
};

module.exports = { getRandomName, getRandomApplications, gtRandomEmail };
