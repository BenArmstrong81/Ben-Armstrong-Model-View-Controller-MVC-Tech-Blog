const { User } = require("../models");

const userData = [
  {
    name: "Sir Richard Branson",
    email: "RichoB@vigin.com",
    password: "password1",
  },
  {
    name: "Michael Schumacher",
    email: "thegoat@ferrari.com",
    password: "password2",
  },
  {
    name: "Ray Dalio",
    email: "RDalio@Bridgewatercapital.com",
    password: "password3",
  },
  {
    name: "Tony Robbins",
    email: "anthonyrobbins@example.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;