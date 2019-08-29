module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define("Products", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      quanity: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal"
      }
    });
    return Products;
  };