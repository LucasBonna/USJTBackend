const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  users: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: { type: String },
  }],
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
})

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  assignedTo: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    username: { type: String },
  },
  project: {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true},
    name: { type: String, required: true},
  },
  status: { type: String, enum: ["Not Started", "In Progress", "Completed"], default: "Not Started", required: true },
})

const User = mongoose.model("User", userSchema);
const Team = mongoose.model("Team", teamSchema);
const Project = mongoose.model("Project", projectSchema);
const Task = mongoose.model("Task", taskSchema);

module.exports = { User, Team, Project, Task};