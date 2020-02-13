let express = require("express");
const db = require("./models");
const html_routes = require("./controllers/htmlController");
const nutri_routes = require("./controllers/nutriController");
const api_routes = require("./controllers/userController");

let PORT = process.env.PORT || 8080;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

app.use(html_routes);
app.use(nutri_routes);
app.use(api_routes);

db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});