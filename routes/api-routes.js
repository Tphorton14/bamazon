const db = require("../models");

module.exports = function (app) {
    // where we are going with this
    // "/api" is the url
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function(data){
            res.json(data);
        }); 
        // res.json({ body: "Hello World!" });
    });

    // app.post("/api/products", function (req, res) {
    //     console.log(req.body);
    //     db.Products.create(req.body)
    //         .then(function (dbProducts) {
    //             res.json(dbProducts);
    //         });
    // });

    // app.delete("/api/products/:stock_quantity", function(req, res){
    //     db.Products.destroy({
    //         where: {
    //             stock_quantity: req.params.stock_quantity
    //         }
    //     })
    //     .then(function(dbProducts){
    //         res.json(dbProducts);
    //     });
    // });
};