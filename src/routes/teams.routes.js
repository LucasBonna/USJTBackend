const express = require('express');
const teamsController = require("../controllers/teamsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Teams
 *   description: Creating Teams
 */

/**
 * @swagger
 * /api/v1/teams/create:
 *  post:
 *   summary: Create a new team
 *   tags: [Team]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *            name:           
 *               type: string
 *             members:
 *               type: string
 *             project:
 *               type: string
 *            
 *  *   responses:
 *     '201':
 *       description: Team created
 *     '400':
 *       description: Bad request
 *     '500':
 *       description: Internal server error
 */
router.post(`/createTeam`, teamsController.create);

module.exports = router;