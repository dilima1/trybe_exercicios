const { Book } = require('../models/');

const getBooksAll = async () => {
  const books = await Book.findAll({ 
    order: [['title', 'ASC']],
  });

  return books;
};

const getBookById = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const createBook = async (title, author, pageQuantity, publisher) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const updateBook = async (id, title, author, pageQuantity, publisher) => {
  const [updateBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id }},
  );

  return updateBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: { id }}
  );
  return book;
};

const getByAuthor = async (author) => {
  const books = await Book.findAll({ 
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};

module.exports = {
  getBooksAll,
  getBookById,
  createBook,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
};
