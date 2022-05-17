//import third-party modules
const express = require("express");
const bodyParser = require("body-parser");

/***import local modules***/
//import the router
const routers = require(__dirname + "/routes/routes");

//import the middlewares
const { workDay } = require(__dirname + "/middlewares/workDay");

//import the callback functions
const { listener } = require(__dirname + "/controllers/listener");

//generate our app server
const app = express();

//port to listen to
const port = 3000 || process.env.port;

//set engines to our app
app.set("view engine", "ejs");

//use the middleware
// app.use(workDay);

//connect to the files inside public folder
app.use(express.static("public"));

//use the bodyParser module to fitch the inputs from our browser
app.use(bodyParser.urlencoded({ extended: true }));

//use the routers to render pages
app.use("/", routers);

app.listen(port, (err) => listener(err, port));
