const authController = {
    login: async (req, res) => {
        // Your login logic here
        res.json({ message: "Login successful" });
    }
}

module.exports = authController;