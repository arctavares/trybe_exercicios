const { Book } = require('../models');

const BooksService = {
    async getAll() {
        const books = await Book.findAll();
        return books;
    },
};

module.exports = BooksService;