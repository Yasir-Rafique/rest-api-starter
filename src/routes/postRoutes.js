const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const postController = require('../controllers/postController');

const router = express.Router();

router.use(protect);

router.post('/', postController.createPost);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
