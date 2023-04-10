//-------------All required packages:
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
require("dotenv").config();
const helpers = require("./utils/helpers");
const app = express();

//-------------Port required for the application to run:
const PORT = process.env.PORT || 3001;

//-------------Set up Handlebars.js engine with custom helper
const hbs = exphbs.create({ helpers });

//-------------Using sequelized to hide and store personal information such as password:
const sess = {
  secret: "Super secret secret",
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//-------------Initialising application:
app.use(session(sess));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

//-------------Application to run on port:
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

//-------------Debugging
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});