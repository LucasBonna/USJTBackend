const { User, Task, Team } = require("../database/models");

const usersController = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      if (users.length < 1) {
        return res.status(204).json({ message: "Nenhum usuario encontrado!" });
      }
      if (!users) {
        return res.status(404).json({ message: "Erro ao buscar usuarios!" });
      }
      
      return res
        .status(200)
        .json({ message: "Usuarios buscados com sucesso!", users });
    } catch (error) {
      console.log("Erro ao buscar usuarios: ", error);
      return res.status(500).json({ message: "Erro ao buscar usuarios" });
    }
  },
  
  getUserInfo: async (req, res) => {
    const { userId } = req;
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }
  
      const tasks = await Task.find({ "assignedTo.userId": userId });
      const teams = await Team.find({ "members.userId": userId });
      const teamAdmin = await Team.find({ "adminId": userId });
  
      return res.status(200).json({
        user: {
          _id: user._id,
          email: user.email,
          username: user.username,
          tasks,
          teams,
        },
      });
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
      return res.status(500).json({ message: "Erro ao buscar informações do usuário" });
    }
  },
}

module.exports = usersController;
