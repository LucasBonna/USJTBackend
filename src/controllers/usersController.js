const { User } = require("../../models");

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

  
};

module.exports = usersController;
