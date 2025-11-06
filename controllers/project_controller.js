const Project = require("../models/project_model");

exports.Add_project = async (req, res) => {
    try {
        const { project_name, department, assignto, project_stages } = req.body;

        const project = new Project({ project_name, department, assignto , project_stages});
        await project.save();

        res.status(201).json({ message: "Project Created" });
    } catch (error) {
        console.error("Error creating :", error);
        res.status(500).json({ error: error.message });
    }

}

exports.Get_Project = async (req, res) => {
    try {
        const { project_name } = req.body;
        let project;
        if (project_name === "all") {
            project = await Project.find();
        } else {
            project = await Project.find({ project_name });
        }

        res.status(200).json(project);
    } catch (error) {
        console.error("server error : ", error)
        res.status(500).json({ message: "Internal Server Error.", error: error.message });
    }
}

exports.Delete_project = async (req, res) => {
    try {
        const { id } = req.body;
        await Project.deleteOne({ _id: id })

        res.status(200).json({ message: "Project deleted successfully." });
    } catch (error) {
        console.error("Error deleting :", error);
        res.status(500).json({ error: error.message });
    }
}

exports.update_Project = async (req, res) => {
    try {
        const { project_name, department,project_stages, assignto, id } = req.body;
        const pro = await Project.updateOne(
            { _id: id },
            { $set: { project_name, department, project_stages, assignto } }
        );
        res.status(200).json({ message: "Project updated successfully", result: updateResult });
    } catch (error) {
        console.error("Error updating :", error.message);
        res.status(500).json({ error: error.message });
    }
}
