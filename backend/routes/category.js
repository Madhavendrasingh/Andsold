const express = require('express');
const router = express.Router();

const { categoryById, list, create, read, update, remove } = require('../controllers/category');
const { userById } = require('../controllers/user');
const { verifyJwt } = require("../controllers/authentication");

router.get('/categories', list);

router.post('/category/create/:userId', verifyJwt, create);
router.get('/category/:categoryId', read);
router.put('/category/:categoryId/:userId', verifyJwt, update);
router.delete('/category/:categoryId/:userId', verifyJwt, remove);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;