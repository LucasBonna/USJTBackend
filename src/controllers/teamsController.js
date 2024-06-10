const { Team } = require("../database/models")

const teamsController = {
    createTeam: async (req, res) => {
        const { name, members, adminId } = req.body;
        console.log(req.body)
        try {
            const mappedMembers = members.map(member => ({
                userId: member.memberId,
                username: member.memberName
            }));

            const newTeam = await Team.create({
                name,
                members: mappedMembers,
                adminId,
            });

            if (!newTeam) {
                return res.status(400).json({ message: "Erro ao criar time!" });
            }

            return res.status(201).json({ message: "Time criado com sucesso", Team: newTeam });
        } catch (error) {
            console.log("Erro ao criar time", error);
            return res.status(500).json({ message: "Erro ao criar time" });
        }
    },
    editTeam: async (req, res) => {
        const { id } = req.params;
        const { name, members } = req.body;
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

            await team.save();

            return res.status(200).json({ message: "Time atualizado com sucesso", team: team });
        } catch (error) {
            console.log("Erro ao editar time", error);
            return res.status(500).json({ message: "Erro ao editar time" });
        }
    },

    deleteTeam: async (req, res) => {
        const { id } = req.params;

        try {
            const team = await Team.findById(id);

            if (!team) {
                return res.status(404).json({ message: "Time não encontrado!" });
            }

            const { user } = req.user;

            if (team.adminId !== user.id) {
                return res.status(403).json({ message: "Você não tem permissão para deletar este time!" });
            }

            await team.remove();

            return res.status(200).json({ message: "Time deletado com sucesso" });
        } catch (error) {
            console.error("Erro ao deletar time", error);
            return res.status(500).json({ message: "Erro ao deletar time" });
        }
    },

    getUserTeams: async (req, res) => {
        const { userId } = req;
    
        try {
            // Encontrar os times aos quais o usuário pertence
            const teams = await Team.find({
                members: { $elemMatch: { userId } }
            });
    
            if (teams.length === 0) {
                return res.status(404).json({ message: "Nenhum time encontrado para este usuário" });
            }
    
            return res.status(200).json({ teams: teams });
        } catch (error) {
            console.error("Erro ao buscar times do usuário", error);
            return res.status(500).json({ message: "Erro ao buscar times do usuário" });
        }
    },

    getTeams: async (req, res) => {
        try {
            const teams = await Team.find();
            if (teams.length < 1) {
                return res.status(204).json({ message: "Nenhum time encontrado!" });
            }
            if (!teams) {
                return res.status(404).json({ message: "Erro ao buscar times!" });
            }

            return res.status(200).json({ message: "Times buscados com sucesso!", teams });
        } catch (error) {
            console.log("Erro ao buscar times: ", error);
            return res.status(500).json({ message: "Erro ao buscar times" });
        }
    },
};


module.exports = teamsController;
