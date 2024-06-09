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
 *   tags: [Tasks]
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
 *               type: string
 *               format: date-time
 *             assignedTo:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   username:
 *                     type: string
 *             TeamId:
 *                 type: string
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
router.post('/create', tasksController.create);

/**
 * @swagger
 * /api/v1/tasks/edit/{taskId}:
 *  put:
 *   summary: Edit an existing task
 *   tags: [Tasks]
 *   parameters:
 *     - in: path
 *       name: taskId
 *       schema:
 *         type: string
 *       required: true
 *       description: ID of the task to edit
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
 *               type: string
 *               format: date-time
 *             assignedTo:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                   username:
 *                     type: string
 *             teamId:
 *                 type: string
 *             status:
 *                 type: string
 *                 enum: [Not Started, In Progress, Completed]
 *   responses:
 *     '200':
 *       description: Task updated
 *     '400':
 *       description: Bad request
 *     '404':
 *       description: Task not found
 *     '500':
 *       description: Internal server error
 */
router.put('/edit/:taskId', tasksController.edit);

/**
 * @swagger
 * /api/v1/tasks/delete/{taskId}:
 *  delete:
 *   summary: Delete a task
 *   tags: [Tasks]
 *   parameters:
 *     - in: path
 *       name: taskId
 *       schema:
 *         type: string
 *       required: true
 *       description: ID of the task to delete
 *   responses:
 *     '200':
 *       description: Task deleted
 *     '404':
 *       description: Task not found
 *     '500':
 *       description: Internal server error
 */
router.delete('/delete/:taskId', tasksController.delete);

module.exports = router;