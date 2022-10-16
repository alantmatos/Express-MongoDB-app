const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Project = require("./models/project");


mongoose.connect('mongodb://localhost:27017/projects')
    .then(() => {
        console.log("Moongo connected")
    })
    .catch(err => {
        console.log("Connection failed!!!")
        console.log(err)
    });



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.listen(3000, () => {
    console.log("Listening to port 3000")
});

app.get('/projects', async (req, res) => {
    const allProjects = await Project.find({})
    res.send(allProjects)
});

app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id)
    res.send(project)
});





