const { Team } = require("../database/models")

const teamsController = {
    create: async (req, res) => {
        const  { name, members, projects } = req.body;
        try {
            const newTeam = await team.create ({
                name: name,
                members: members,
                projects: projects,
            });
        if(!newTeams) {
            return res.status(400).json ({message: "Erro ao criar time! "});
        }
        return res.status(201).json({message: "Time criado com sucesso", newTeam});
      } catch (error) {
        console.log("Erro ao criar time", error);
        return res.status(500).json({message: "Erro ao criar time" });
      }

    },

}

module.exports = teamsController;