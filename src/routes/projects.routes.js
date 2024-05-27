const express = require('express');
const projectsController = require("../controllers/projectsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: Managing Projects
 */

/**
 * @swagger
 * /api/v1/projects/createProject:
 *  post:
 *   summary: Create a new project
 *   tags: [Projects]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *             teamId:
 *               type: string
 *             adminId:
 *               type: string
 *             startDate:
 *               type: string
 *               format: date
 *             endDate:
 *               type: string
 *               format: date
 *   responses:
 *     '201':
 *       description: Project created successfully
 *     '400':
 *       description: Bad request
 *     '500':
 *       description: Internal server error
 */
router.post('/createProject', projectsController.create);

/**
 * @swagger
 * /api/v1/projects/edit/{projectId}:
 *  put:
 *   summary: Edit an existing project
 *   tags: [Projects]
 *   parameters:
 *     - in: path
 *       name: projectId
 *       required: true
 *       schema:
 *         type: string
 *       description: The project ID
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *             startDate:
 *               type: string
 *               format: date
 *             endDate:
 *               type: string
 *               format: date
 *   responses:
 *     '200':
 *       description: Project updated successfully
 *     '400':
 *       description: Bad request
 *     '404':
 *       description: Project not found
 *     '500':
 *       description: Internal server error
 */
router.put('/edit/:projectId', projectsController.edit);

/**
 * @swagger
 * /api/v1/projects/delete/{projectId}:
 *  delete:
 *   summary: Delete a project
 *   tags: [Projects]
 *   parameters:
 *     - in: path
 *       name: projectId
 *       required: true
 *       schema:
 *         type: string
 *       description: The project ID
 *   responses:
 *     '200':
 *       description: Project deleted successfully
 *     '404':
 *       description: Project not found
 *     '500':
 *       description: Internal server error
 */
router.delete('/delete/:projectId', projectsController.delete);

module.exports = router;