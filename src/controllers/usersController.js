const { User } = require("../../models");
const bcrypt = require("bcrypt");

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

  createUser: async (req, res) => {
    const { email, username, password } = req.body;
    try {
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return res
          .status(409)
          .json({ message: "Email or username already exists" });
      }

      hashedPassword = await bcrypt.hash(password, 10);

      const newUser = User.create({
        email: email,
        username: username,
        password: hashedPassword,
      });
      if (!newUser) {
        return res.status(400).json({ message: "Erro ao criar usuario!" });
      }

      return res.status(201).json({ message: "Usuario criado com sucesso!" });
    } catch (error) {
      console.log("Erro ao criar usuario");
      return res.status(500).json({ message: "Erro ao criar usuario" });
    }
  },
};

module.exports = usersController;
