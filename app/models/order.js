'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'customerId',
        as: 'customerName'
      });
      this.belongsTo(models.Category, {
        foreignKey: 'categoryId',
        as: 'categoryName'
      });
      this.belongsTo(models.Status, {
        foreignKey: 'statusId',
        as: 'statusName'
      })
    }
  }
  Order.init({
    customerId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    amount: DataTypes.STRING,
    price: DataTypes.STRING,
    additionalPrice: DataTypes.STRING,
    totalPrice: DataTypes.STRING,
    description: DataTypes.STRING(1000),
    debt: DataTypes.STRING,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};