const { Team } = require("../database/models")

const teamsController = {
    createTeam: async (req, res) => {
        const  { name, members, projects } = req.body;
        const {user} = req.user;
        try {
            const newTeam = await team.create ({
                name: name,
                members: members,
                projects: projects,
                adminId: user.id,
            });
        if(!newTeams) {
            return res.status(400).json ({message: "Erro ao criar time! "});
        }
        return res.status(201).json({message: "Time criado com sucesso", Team: newTeam});
      } catch (error) {
        console.log("Erro ao criar time", error);
        return res.status(500).json({message: "Erro ao criar time" });
      }

    },

}

module.exports = teamsController;