const express = require('express');
const router = express.Router();

// Controllers
const bookControllers = require('../controllers/books.controller');

// MiddleWere
const middleWeres = require('../middlewere/verification');

// Routes
router.post('/books/show',middleWeres.verifyToken, bookControllers.viewBooks);
router.post('/books/add',middleWeres.verifyToken, bookControllers.addBook)
router.put('/books/update',middleWeres.verifyToken, bookControllers.updateBook)
router.delete('/books/delete/:id',middleWeres.verifyToken, bookControllers.deleteBook)

module.exports = router;