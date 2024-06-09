const express = require('express');
const User = require('../database/models');

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


/**
 * @swagger
 * /api/v1/users/info:
 *  get:
 *    summary: Get user info
 *    tags: [Users]
 *    responses:
 *      '200':
 *        description: User Info
 *      '500':
 *        description: Internal server error
 */
router.get('/info', usersController.getUserInfo);

module.exports = router;