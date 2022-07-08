const book = require('../models/book');

const booksService = {
    async getAll() {
        const books = await booksService.getAll();
        return books;
    },
};

module.exports = booksService;