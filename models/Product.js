module.exports = function(sequelize, DataType) {
    const Products = sequelize.define("Products", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataType.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Products.associate = function (models) {

                        // what does the post belong to?       
        Products.belongsTo(models.P, {
            foreignKey : {
                allowNull: false
            }
        });
    };

    return Products

};