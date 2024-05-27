const express = require('express');
const teamsController = require("../controllers/teamsController");

const router = express.Router();


/**
 * @swagger
 * /api/v1/teams/createTeam:
 *   post:
 *     summary: Create a new team
 *     tags: [Teams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the team
 *                 example: "Developers"
 *               members:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     memberId:
 *                       type: string
 *                       description: ID of the member
 *                       example: "member1"
 *                     memberName:
 *                       type: string
 *                       description: Name of the member
 *                       example: "John Doe"
 *                 description: Array of member objects
 *               projects:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     projectId:
 *                       type: string
 *                       description: ID of the project
 *                       example: "project1"
 *                 description: Array of project objects
 *     responses:
 *       201:
 *         description: Time criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Time criado com sucesso"
 *                 Team:
 *                   type: object
 *                   description: The created team object
 *       400:
 *         description: Erro ao criar time!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao criar time!"
 *       500:
 *         description: Erro ao criar time
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao criar time"
 */
router.post('/createTeam', teamsController.createTeam);

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

