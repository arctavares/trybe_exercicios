const booksService = require('../services/booksService');

const booksController = {
    async getAll(_req, res) {
        const books = await booksService.getAll();
        res.status(200).json(books);
    },
};

module.exports = booksController;