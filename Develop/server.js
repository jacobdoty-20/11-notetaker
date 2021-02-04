var fs = require("fs");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var notes = [];

// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

// display all notes
app.get("/api/notes", function(req, res) {
    return res.json(notes);
  });
  
// new notes - takes in JSON input
app.post("/api/notes", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    var newNote = req.body;
  
    console.log(newNote);
  
    notes.push(newNote);
  
    res.json(newNote);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  