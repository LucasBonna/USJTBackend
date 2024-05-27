const { Project } = require("../database/models");
const { edit } = require("./tasksController");

const projectsController = {
    create: async (req, res) => {
        const { name, description, teamId, users, tasks, userId } = req.body;
        try {
            const newProject = await Project.create({
                name: name,
                description: description,
                teamId: teamId,
                users: users,
                tasks: tasks,
                adminId: userId,
            });
            if (!newProject) {
                return res.status(400).json({ message: "Erro ao criar projeto!" });
            }
            return res.status(201).json({ message: "Projeto criado com sucesso!", Project: newProject });
        } catch (error) {
            console.log("Erro ao criar projeto: ", error);
            return res.status(500).json({ message: "Erro ao criar projeto" });
        }
    },

    edit: async (req, res) => {
        const { projectId } = req.params;
        const { name, description, teamId, users, tasks } = req.body;
        try {
            const project = await Project.findById(projectId);
            if (!project) {
                return res.status(404).json({ message: "Projeto não encontrado!" });
            }

            const updatedFields = {
                name: name,
                description: description,
                teamId: teamId,
            };

            for (const field in updatedFields) {
                if (updatedFields[field]!== undefined) {
                    project[field] = updatedFields[field];
                }
            }

            await project.save();

            return res.status(200).json({ message: "Projeto editado com sucesso!", Project: project });
        } catch (error) {
            console.log("Erro ao editar projeto: ", error);
            return res.status(500).json({ message: "Erro ao editar projeto" });
        }
    },

    delete: async (req, res) => {
        const { projectId } = req.params;
        try {
            const project = await Project.findById(projectId);
            if (!project) {
                return res.status(404).json({ message: "Projeto não encontrado!" });
            }

            await project.remove();

            return res.status(200).json({ message: "Projeto deletado com sucesso!" });
        } catch (error) {
            console.log("Erro ao deletar projeto: ", error);
            return res.status(500).json({ message: "Erro ao deletar projeto" });
        }
    }
}

module.exports = projectsController;