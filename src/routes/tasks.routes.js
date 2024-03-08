const express = require('express');
const tasksController = require("../controllers/tasksController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Tasks operations
 */

/**
 * @swagger
 * /api/v1/tasks/create:
 *  post:
 *   summary: Create a new task
 *   tags: [Task]
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             title:           
 *               type: string
 *             description:
 *               type: string
 *             dueDate:
 *               type: Date
 *             assignedTo:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   username:
 *                     type: string
 *             project:
 *                 type: object
 *                 properties:
 *                   projectId:
 *                     type: string
 *                   name:
 *                     type: string
 *             status:
 *                 type: string
 *                 enum: [Not Started, In Progress, Completed]
 *   responses:
 *     '201':
 *       description: Task created
 *     '400':
 *       description: Bad request
 *     '500':
 *       description: Internal server error
 */
router.post(`/create`, tasksController.create);

module.exports = router;

