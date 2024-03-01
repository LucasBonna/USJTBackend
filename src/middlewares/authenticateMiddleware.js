const jwt = require("jsonwebtoken");

const authenticateMiddleware = (req, res, next) => {
  const accessToken =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!accessToken) {
    return res.status(401).json({ message: "Token de acesso não fornecido" });
  }

  jwt.verify(accessToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token de acesso expirado" });
      } else {
        return res.status(401).json({ message: "O JWT fornecido é inválido" });
      }
    }

    // Se o token for válido, podemos prosseguir
    next();
  });
};

module.exports = authenticateMiddleware;
