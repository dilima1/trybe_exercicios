const express = require('express');

const BookController = require('../controllers/booksController')

const bookRoute = express.Router();

bookRoute.get('/', BookController.getBooksAll);
bookRoute.get('/:bookId', BookController.getBookById);
bookRoute.post('/', BookController.createBook);
bookRoute.put('/:bookId', BookController.updateBook)
bookRoute.delete('/:bookId', BookController.deleteBook)

module.exports = bookRoute;