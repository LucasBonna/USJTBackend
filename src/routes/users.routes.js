const express = require('express');
const User = require('../../models');

const router = express.Router();
const usersController = require('../controllers/usersController')

/**
 * @swagger
 * tags:
 *  name: Users
 * description: Users operations
 */

/**
 * @swagger
 * /api/v1/users:
 *  get:
 *   summary: Get all users
 *   tags: [Users]
 *   responses:
 *     '200':
 *       description: A list of users
 *     '500':
 *       description: Internal server error
 */
router.get('/', usersController.getUsers);

module.exports = router;