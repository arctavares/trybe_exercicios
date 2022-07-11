const { DataTypes } = require('sequelize');

/** @type {import('sequelize').ModelAttributes} */
const attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pageQuantity: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE
  }
};

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Book', attributes, {
      tableName:'Books',    
    });
  
    return model;
  };