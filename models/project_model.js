const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  project_name: String,      // fixed: removed ":" typo
  department: String,
  status: String,
  project_stages: [mongoose.Schema.Types.Mixed], // allows any type of JSON data
  assignto: String,
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
