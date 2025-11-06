const mongoose = require("mongoose");

const Project = new mongoose.Schema({
    "project_name:": String,
    "department": String,
    "status": String,
    "project_stages": [String],
    "assignto": String,
}, {timestamps: true})

module.exports = mongoose.model("Project",Project);

