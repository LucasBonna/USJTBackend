const mongoose = require("mongoose");

const expiredTokens = new mongoose.Schema({
  token: { type: String, required: true },
})

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);
const Team = mongoose.model("Team", teamSchema);
const ExpTokens = mongoose.model("ExpTokens", expiredTokens);

module.exports = { User, Team, ExpTokens };
