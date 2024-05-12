const dotenv = require("dotenv").config(),
    express = require("express"),
    mongoose = require("mongoose"),
    Task = require("./models/taskModel"),
    routes = require('./routes/taskRoutes'),
    app = express(),
    cors = require("cors")
    
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: true, credentials: true }));
app.use("/api/tasks", routes)

//Routes
app.get("/", (req, res) => {
    res.send("Home Page")
})

//DB connection
mongoose.connect(process.env.DB).then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}).catch((err) => console.log(err))
