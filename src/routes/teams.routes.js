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
 *               adminId:
 *                 type: string
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
``


/**
 * @swagger
 * /api/v1/teams/:
 *  get:
 *   summary: Get user teams
 *   tags: [Teams]
 *   parameters:
 *     - in: query
 *       name: userId
 *       schema:
 *         type: string
 *       required: true
 *       description: ID of the user
 *   responses:
 *     '200':
 *       description: Teams
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Team'
 *     '400':
 *       description: Bad request
 *     '404':
 *       description: Team not found
 *     '500':
 *       description: Internal server error
 */
router.get('/', teamsController.getUserTeams);

/**
 * @swagger
 * /api/v1/teams/all:
 *   get:
 *     summary: Get all teams
 *     tags: [Teams]
 *     responses:
 *       '200':
 *         description: Teams retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Times buscados com sucesso!"
 *                 teams:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                         example: "team_id"
 *                       name:
 *                         type: string
 *                         example: "Team Name"
 *                       members:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             userId:
 *                               type: string
 *                               example: "user_id"
 *                             username:
 *                               type: string
 *                               example: "username"
 *                             _id:
 *                               type: string
 *                               example: "member_id"
 *                       adminId:
 *                         type: string
 *                         example: "admin_id"
 *                       __v:
 *                         type: integer
 *                         example: 0
 *       '204':
 *         description: No teams found
 *       '404':
 *         description: Error retrieving teams
 *       '500':
 *         description: Internal server error
 */
router.get('/all', teamsController.getTeams);

/**
 * @swagger
 * /api/v1/teams/info/{teamId}:
 *   get:
 *     summary: Get team information
 *     tags: [Teams]
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the team
 *     responses:
 *       '200':
 *         description: Team information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Informações do time"
 *                 teamInfo:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "team_id"
 *                     name:
 *                       type: string
 *                       example: "Team Name"
 *                     members:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           userId:
 *                             type: string
 *                             example: "user_id"
 *                           username:
 *                             type: string
 *                             example: "username"
 *                           _id:
 *                             type: string
 *                             example: "member_id"
 *                     adminId:
 *                       type: string
 *                       example: "admin_id"
 *                     projects:
 *                       type: array
 *                       items:
 *                         type: object
 *                     tasks:
 *                       type: array
 *                       items:
 *                         type: object
 *       '404':
 *         description: Team not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Time não encontrado!"
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao buscar informações do time"
 */
router.get('/info/:teamId', teamsController.getTeamInfo);

module.exports = router;

