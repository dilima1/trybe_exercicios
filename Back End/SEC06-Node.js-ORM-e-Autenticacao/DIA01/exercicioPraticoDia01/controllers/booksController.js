const BookService = require('../service/book.Service');

const error500Message = 'Revise seu códio, algo deu errado';

const getBooksAll = async (_request, response) => {
  try {
    const books = await BookService.getBooksAll();
    return response.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    response.status(500).json({ message: 'erro'});
  }
};

const getBookById = async (request, response) => {
  try {
    const { bookId } = request.params;
    const book = await BookService.getBookById(bookId);

    if (!book) return response.status(404).json({ message: 'Book not found' });

    return response.status(200).json(book);
  } catch (e) {
    response.status(500).json({ message: error500Message });
  }
};

const createBook = async (request, response) => {
  try {
    const { title, author, pageQuantity, publisher } = request.body;
    const newBook = await BookService.createBook(title, author, pageQuantity, publisher);

    return response.status(201).json(newBook);
  } catch (e) {
    response.status(500).json({ message: error500Message });
  }
};

const updateBook = async (request, response) => {
  try {
    const { title, author, pageQuantity, publisher } = request.body;
    const { bookId } = request.params;

    const updateBook = await BookService.updateBook(bookId, title, author, pageQuantity, publisher);

    if(!updateBook) return response.status(200).json({ message: 'Book not found!' })

    return response.status(200).json({ message: 'Book updated!' })

  } catch (e) {
    response.status(500).json({ message: error500Message })
  }
};

const deleteBook = async (request, response) => {
  try {
    const { bookId } = request.params;

    await BookService.deleteBook(bookId);

    response.status(200).json({ message: 'Book excluído com sucesso!' })
  } catch (e) {
    response.status(500).json({ message: error500Message });
  }
};

const getAll = async (request, response) => {

  const { author } = request.query;
  let books;

  if (author) {
    books = await BookService.getByAuthor(author);
  } else {
    books = await BookService.getAll();
  }
  response.status(200).json(books);
};

module.exports = {
  getBooksAll,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  getAll,
};
