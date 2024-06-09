const { Task } = require("../database/models");

const tasksController = {
    create: async (req, res) => {
        const { title, description, dueDate, assignedTo, status } = req.body;
        try {
            const newTask = await Task.create({
                title: title,
                description: description,
                dueDate: dueDate,
                assignedTo: assignedTo,
                status: status
            });
            if (!newTask) {
                return res.status(400).json({ message: "Erro ao criar task!" });
            }
            return res.status(201).json({ message: "Task criado com sucesso!", task: newTask });
        } catch (error) {
            console.log("Erro ao criar task: ", error);
            return res.status(500).json({ message: "Erro ao criar task" });
        }
    },

    edit: async (req, res) => {
        const { taskId } = req.params;
        const { title, description, dueDate, assignedTo, status } = req.body;

        try {
            const taskToUpdate = await Task.findById(taskId); 


            if (!taskToUpdate) {
                return res.status(404).json({ message: "Tarefa não encontrada!" });
            }

            const updatedFields = { title, description, dueDate, assignedTo, status };

            for (const field in updatedFields) {
                if (updatedFields[field] !== undefined) {
                    taskToUpdate[field] = updatedFields[field];
                }
            }

            const savedTask = await taskToUpdate.save();

            if (!savedTask) {
                return res.status(500).json({ message: "Erro ao salvar a tarefa atualizada" });
            }

            return res.status(200).json({ message: "Tarefa atualizada com sucesso!", task: savedTask });
        } catch (error) {
            console.log("Erro ao atualizar a tarefa: ", error);
            return res.status(500).json({ message: "Erro ao atualizar a tarefa" });
        }
    },

    delete: async (req, res) => {
        const { taskId } = req.params;

        try {
            const taskToDelete = await Task.findById(taskId);

            if (!taskToDelete) {
                return res.status(404).json({ message: "Tarefa não encontrada!" });
            }

            await taskToDelete.destroy();

            return res.status(200).json({ message: "Tarefa deletada com sucesso!" });
        } catch (error) {
            console.log("Erro ao deletar a tarefa: ", error);
            return res.status(500).json({ message: "Erro ao deletar a tarefa" });
        }
    }
};

module.exports = tasksController;