const { Team } = require("../database/models")

const teamsController = {
    createTeam: async (req, res) => {
        const  { name, members, projects } = req.body;
        const {user} = req.user;
        try {
            const newTeam = await Team.create ({
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
    editTeam: async (req, res) => {
        const { id } = req.params;
        const { name, members, projects } = req.body;
        try {
            const team = await Team.findById(id);
            if (!team) {
                return res.status(404).json({ message: "Time não encontrado!" });
            }

        
            const { user } = req.user;
            if (team.adminId !== user.id) {
                return res.status(403).json({ message: "Você não tem permissão para editar este time!" });
            }

            team.name = name || team.name;
            team.members = members || team.members;
            team.projects = projects || team.projects;

            await team.save();

            return res.status(200).json({ message: "Time atualizado com sucesso", team: team });
        } catch (error) {
            console.log("Erro ao editar time", error);
            return res.status(500).json({ message: "Erro ao editar time" });
        }
    },
};


module.exports = teamsController;