require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

// GET Requests
app.get("/", (req, res) => {
    res.render("home");
});



app.listen(process.env.PORT, () => {
    console.log("Server is listening on port " + process.env.PORT + "....")
});