const { Task } = require("../database/models");

const tasksController = {
    create: async (req, res) => {
        const { title, description, dueDate, assignedTo, teamId, status } = req.body;
        console.log(req.body);
        console.log(assignedTo);
        try {
            const newTask = await Task.create({
                title,
                description,
                dueDate,
                assignedTo,
                teamId,
                status
            });

            if (!newTask) {
                return res.status(400).json({ message: "Erro ao criar task!" });
            }

            newTask.assignedTo = assignedTo;
            await newTask.save();

            return res.status(201).json({ message: "Task criado com sucesso!", task: newTask });
        } catch (error) {
            console.log("Erro ao criar task: ", error);
            return res.status(500).json({ message: "Erro ao criar task" });
        }
    },

    edit: async (req, res) => {
        const { taskId } = req.params;
        const { title, description, dueDate, assignedTo, status } = req.body;
        console.log(req.body);

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

            await Task.deleteOne({ _id: taskId });

            return res.status(200).json({ message: "Tarefa deletada com sucesso!" });
        } catch (error) {
            console.log("Erro ao deletar a tarefa: ", error);
            return res.status(500).json({ message: "Erro ao deletar a tarefa" });
        }
    },

    getTaskById: async (req, res) => {
        const { id } = req.params;

        try {
            const task = await Task.findById(id);

            if (!task) {
                return res.status(404).json({ message: "Tarefa não encontrada!" });
            }

            return res.status(200).json({ task });
        } catch (error) {
            console.log("Erro ao buscar informações da tarefa: ", error);
            return res.status(500).json({ message: "Erro ao buscar informações da tarefa" });
        }
    },

    updateStatus: async (req, res) => {
        const { taskId } = req.params;
        const { status } = req.body;
    
        try {
          const task = await Task.findById(taskId);
    
          if (!task) {
            return res.status(404).json({ message: "Tarefa não encontrada!" });
          }
    
          task.status = status;
          await task.save();
    
          return res.status(200).json({ message: "Status da tarefa atualizado com sucesso!", task });
        } catch (error) {
          console.log("Erro ao atualizar status da tarefa: ", error);
          return res.status(500).json({ message: "Erro ao atualizar status da tarefa" });
        }
      },

};

module.exports = tasksController;