module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define("Products", {
        product_name: DataTypes.STRING,
        department_name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.FLOAT,
        stock_quantity: DataTypes.INTEGER
        // title: {
        //     type: DataType.STRING,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     }
        // },
        // body: {
        //     type: DataType.TEXT,
        //     allowNull: false,
        //     len: [1]
        // }
    });

    // Products.associate = function (models) {
    //                     // what does the post belong to?       
    //     Products.belongsTo(models.items, {
    //         foreignKey : {
    //             allowNull: false
    //         }
    //     });
    // };

    return Products;

};