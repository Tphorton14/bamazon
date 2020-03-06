module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define("Products", {
        product_name: DataTypes.STRING,
        department_name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL(10,2),
        stock_quantity: DataTypes.INTEGER
        
    });


    return Products;

};