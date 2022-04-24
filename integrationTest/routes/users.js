var express = require('express');
var router = express.Router();
var {getUsers , getUserById, addUser , deleteUser} = require( "../services/user-service");

/* GET users listing. */
router.get('/', getUsers);

/* GET user by ID. */
router.get('/:id', getUserById);

/* Post user. */
router.post('/', addUser);

/* delete user. */
router.delete('/:id',deleteUser);
module.exports = router;
