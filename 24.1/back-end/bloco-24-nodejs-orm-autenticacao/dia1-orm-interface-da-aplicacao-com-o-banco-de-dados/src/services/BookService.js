const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');
const Book = require('../db/models/Book');

const getAll = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = {
  getAll,
};
