const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const Project = require("./models/project");
const methodOverride = require('method-override');


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
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


app.listen(3000, () => {
    console.log("Listening to port 3000")
});

app.get('/projects/new', (req, res) => {
    res.render("projects/new.ejs")
});

app.get('/projects', async (req, res) => {
    const allProjects = await Project.find({})
    // res.send(allProjects)
    res.render("projects/index.ejs", { allProjects })
});

app.get('/projects/:id/edit', async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id)
    res.render("projects/edit.ejs", { project })
});

app.put('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const project = await Project.findByIdAndUpdate(id, req.body)
    res.redirect("/projects")
});

app.get('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id)
    // res.send(project) 
    res.render("projects/show.ejs", { project })
});

app.post("/projects", async (req, res) => {
    const newProject = new Project(req.body)
    await newProject.save()
    res.redirect(`/projects/${newProject._id}`)
});

app.delete("/projects/:id", async (req, res) => {
    const { id } = req.params;
    const deleteProject = await Project.findByIdAndDelete(id)
    res.redirect("/projects")
});








