const express = require('express');
const authController = require('../controllers/authController');
const usersController = require('../controllers/usersController');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication operations
 */

/**
 * @swagger
 * /api/v1/auth/authenticate:
 *   post:
 *     summary: Login to the application
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Unauthorized
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Internal Server Error
 */
router.post('/authenticate', authController.authenticate);

/**
 * @swagger
 * /api/v1/auth/register:
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
router.post(`/register`, authController.register);

module.exports = router;
