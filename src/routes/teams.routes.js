const express = require('express');
const teamsController = require("../controllers/teamsController");

const router = express.Router();


router.post(`/createTeam`, teamsController.createTeam);

module.exports = router;