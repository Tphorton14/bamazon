const db = require("../models");

module.exports = function (app) {
    // where we are going with this
            // "/api" is the url
    app.get("/api/products", function (req, res){
        res.json({ body: "Hello World!" });
    });

    app.post("/api/products", function(req, res){
        console.log(req.body);
        res.json(req.body);
    });
}