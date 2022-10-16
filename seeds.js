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


const projects_seed = [
    {
        project_name: "BackHome",
        project_languages: "JavaScript, React, Ruby on Rails, HTML, CSS",
        project_description: "Back Home was designed to be a simple and easy to access tool with only one goal, help lost pets get back to their beloved family.",
        project_cover: "https://live.staticflickr.com/65535/52396662582_b043549ddc_b.jpg",
        project_demo: "",
        project_frontend: "https://github.com/alantmatos/backhome-frontend",
        project_backend: ""

    },
    {
        project_name: "The Json Blog",
        project_languages: "JavaScript, React, Ruby, Sinatra, HTML, CSS",
        project_description: "A full CRUD app using React (frontend) + sinatra(backend), It allows the users to add, display, edit and delete posts.",
        project_cover: "https://live.staticflickr.com/65535/52396663847_cf760c69f8_b.jpg",
        project_demo: "",
        project_frontend: "",
        project_backend: ""

    },
    {
        project_name: "NotSkull Candy ",
        project_languages: "JavaScript, React, Ruby, Postgress, Heroku, Tailwind, HTML, CSS",
        project_description: "An e-commerce website allowing users to create an account, view and order products, The application features React + Rails for backend. ",
        project_cover: "https://live.staticflickr.com/65535/52397608875_907bb85fc6_b.jpg",
        project_demo: "",
        project_frontend: "",
        project_backend: ""

    }
];

// clean the database before reseeding.
Project.remove({});


// insert updated seeds. 
Project.insertMany(projects_seed)
    .then(res => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    });




// templates

// const p = new Project({
//     project_name: "BackHome",
//     project_languages: "JavaScript, React, Ruby on Rails, HTML, CSS",
//     project_descriptio: "Back Home was designed to be a simple and easy to access tool with only one goal, help lost pets get back to their beloved family.",
//     project_cover: "https://live.staticflickr.com/65535/52396662582_b043549ddc_b.jpg",
//     project_demo: "",
//     project_frontend: "https://github.com/alantmatos/backhome-frontend",
//     project_backend: ""

// })
// p.save().then(p =>{
//     console.log(p)
// })
// .catch(e => {
//     console.log(e)
// }) 



// const p = new Product({
//     project_name: "",
//     project_languages: "",
//     project_descriptio: "",
//     project_cover: "",
//     project_demo: "",
//     project_frontend: "",
//     project_backend: ""

// })
