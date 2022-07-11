
const models = require('../db/models');

const getAll = async () => {
  const books = await models.Book.findAll();
  return books;
};

module.exports = {
  getAll,
};
