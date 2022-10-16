const mongoose = require("mongoose");


const projectSchema = new mongoose.Schema({

    project_name: {
        type: String
    },
    project_languages: {
        type: String

    },
    project_description: {
        type: String

    },
    project_cover: {
        type: String

    },
    project_demo: {
        type: String

    },
    project_frontend: {
        type: String

    },
    project_backend: {
        type: String

    }



})


const Project = mongoose.model("Project", projectSchema);


module.exports = Project;