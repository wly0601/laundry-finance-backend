'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Order, {
        foreignKey: 'customerId',
        as: 'customerName'
      });
    }
  }
  User.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    address: DataTypes.STRING,
    downPayment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};