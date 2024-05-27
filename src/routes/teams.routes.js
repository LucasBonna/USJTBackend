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

module.exports = router;
