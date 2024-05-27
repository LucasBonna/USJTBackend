const express = require('express');
const teamsController = require("../controllers/teamsController");

const router = express.Router();

router.post(`/createTeam`, teamsController.createTeam);

/**
 * @swagger
 * /api/v1/teams/{id}:
 *  put:
 *   summary: Edit an existing team
 *   tags: [Teams]
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: string
 *       description: The team ID
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             members:
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
 *   responses:
 *     '200':
 *       description: Team updated
 *     '400':
 *       description: Bad request
 *     '404':
 *       description: Team not found
 *     '500':
 *       description: Internal server error
 */
router.put('/:id', teamsController.editTeam);

module.exports = router;