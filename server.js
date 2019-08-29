const express = require ("express"); 

const app = express();
const port = process.env.PORT || 8080;

const db = require("./models");


// app.use adds functionality 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(port, function() {
      console.log("App listening on PORT " + port);
    });
  });