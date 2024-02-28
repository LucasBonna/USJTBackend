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

/**
 * @swagger
 * /api/v1/users:
 *  post:
 *   summary: Create a new user
 *   tags: [Users]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             username:
 *               type: string
 *             password:
 *               type: string
 *   responses:
 *     '201':
 *       description: User created
 *     '409':
 *       description: User already exists
 *     '500':
 *       description: Internal server error
 */
router.post(`/`, usersController.createUser);

module.exports = router;