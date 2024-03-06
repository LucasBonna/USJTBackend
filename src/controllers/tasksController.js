const { Task } = require("../database/models")

const tasksController = {
    create: async (req, res) => {
        const { title, description, dueDate, assignedTo, project, status } = req.body;
        try {
            const newTask = await Task.create({
                title: title,
                description: description,
                dueDate: dueDate,
                assignedTo: assignedTo,
                project: project,
                status: status
            });
            if (!newTask) {
                return res.status(400).json({ message: "Erro ao criar task!" });
              }
        
              return res.status(201).json({ message: "Task criado com sucesso!", Task: newTask });
        } catch (error) {
            console.log("Erro ao criar task: ", error);
            return res.status(500).json({message: "Erro ao criar task"});
        }
    }, 
}

module.exports = tasksController;