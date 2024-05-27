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
 *            members:
 *               type: array
 *               items:
 *                 type: string
 *             projects:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   projectName:
 *                     type: string
 *                   deadline:
 *                     type: string
 *                     format: date
 *                   status:
 *                     type: string
 *                     enum: [not started, in progress, completed]  
 *               
 *            
 *  *   responses:
 *     '201':
 *       description: Team created
 *     '400':
 *       description: Bad request
 *     '500':
 *       description: Internal server error
 */
router.post(`/createTeam`, teamsController.createTeam);

module.exports = router;