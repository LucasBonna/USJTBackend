const { User } = require("../database/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const authController = {
    authenticate: async (req, res) => {
        const { email, username, password } = req.body;
        try {
            const user = await User.findOne({$or: [{ email }, { username }]});
            if (!user) {
                return res.status(404).json({ message: "Usuario nao encontrado!" });
            }
            
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: "Credenciais invalidas!" });
            }
            
            const accessToken = jwt.sign({ accessToken: user }, process.env.JWT_SECRET, { expiresIn: "2d" });
                                    
            res.cookie( 'accessToken', accessToken, { secure: true, httpOnly: true, sameSite: 'Strict' });
            
            return res.status(200).json({ message: "Usuario autenticado com sucesso!", accessToken: accessToken });
        } catch (error) {
            console.log("Erro ao autenticar o usuario: ", error);
            return res.status(500).json({ message: "Erro ao autenticar o usuario!" });
        }
    },
    
    register: async (req, res) => {
        const { email, username, password } = req.body;
        try {
          if (!email || !username || !password) {
            return res.status(400).json({ message: "Por favor, forneça todos os campos obrigatórios." });
          }
        
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Por favor, forneça um email válido." });
          }
          
          const existingUser = await User.findOne({
            $or: [{ email }, { username }],
          });
          if (existingUser) {
            return res
              .status(409)
              .json({ message: "Nome de usuario ou email ja existem" });
          }
    
          hashedPassword = await bcrypt.hash(password, 10);
    
          const newUser = await User.create({
            email: email,
            username: username,
            password: hashedPassword,
          });
          if (!newUser) {
            return res.status(400).json({ message: "Erro ao criar usuario!" });
          }
    
          return res.status(201).json({ message: "Usuario criado com sucesso!" });
        } catch (error) {
          console.log("Erro ao criar usuario: ", error);
          return res.status(500).json({ message: "Erro ao criar usuario" });
        }
      },

      logout: async (req, res) => {
        try {
            res.clearCookie('accessToken');
            
            return res.status(200).json({ message: "Usuario deslogado com sucesso!" });
        } catch (error) {
            console.log("Erro ao deslogar o usuario: ", error);
            return res.status(500).json({ message: "Erro ao deslogar o usuario!" });
        }
      },
}

module.exports = authController;
