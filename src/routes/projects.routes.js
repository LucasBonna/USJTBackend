const express = require('express');
const projectsController = require("../controllers/projectsController");

const router = express.Router();

router.post('/createProject', projectsController.create);

router.put('/edit:projectId', projectsController.edit);

router.delete('/delete/:projectId', projectsController.delete);

module.exports = router;