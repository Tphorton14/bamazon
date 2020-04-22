const db = require("../models");

module.exports = function (app) {
    // where we are going with this
    // "/api" is the url
    app.get("/api/products", function (req, res) {
        db.Products.findAll({}).then(function(rows){
            res.json(rows);
        }).catch(function(error) {
            res.json({ error: error });
        });
    });

    app.get('/api/products/:id', function (req, res) {
        db.Products.find({ where: { id: req.params.id }})
        .then(data => {
            res.json(data);
        }).catch(error => {
            res.json({error: error});
        });
    });
   
    app.put('/api/products/:id', function (req, res) {
        db.Products.update(
            req.body, {where: { id: req.params.id }}
        ).then(data => {
            res.json({ success: true, data: data});
        }).catch(error => {
            res.json({ success: false, error: error});
        });
    });
};