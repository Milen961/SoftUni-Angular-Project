const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { bookController, postController } = require('../controllers');


router.get('/', bookController.getBooks);
router.post('/', auth(), bookController.createBook);

router.get('/:bookId', bookController.getBook);
router.post('/:bookId', auth(), postController.createPost);
router.put('/:bookId', auth(), bookController.subscribe);
router.put('/:bookId/posts/:postId', auth(), postController.editPost);
router.delete('/:bookId/posts/:postId', auth(), postController.deletePost);



module.exports = router