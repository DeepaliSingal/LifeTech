const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

// first run the instance of mongodb locally then run main.js 
// here fruitsDB is a  database name if it does't exist it will create automatically
mongoose.connect('mongodb://localhost:27017/fruitsDB',{useNewUrlParser:true});

// this is a model example  here we define our data
// u can also create schema in diff. variable 
const FRUIT = mongoose.model('Fruits', { name: String });

const fruit = new FRUIT({ name: 'Apple' });
fruit.save().then(() => console.log('mongo db working'));

// if your setup is complete with mongo db 
// then you will see 'mongo db working' in console



app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/intro.html');
});


app.get("/explore/AI/", function (req, res) {
    res.sendFile(__dirname + '/public/ai.html')
});


app.get("/explore/log_in/", function (req, res) {
    res.sendFile(__dirname + '/public/log_in.html')
});



app.get("/explore/sign_up/", function (req, res) {
    res.sendFile(__dirname + '/public/sign_in.html')
});



app.get("/explore/tech/", function (req, res) {
    res.sendFile(__dirname + '/public/tech.html')
});


app.get("/explore/AI/pros/", function (req, res) {
    res.sendFile(__dirname + '/public/ai_pros.html');
});



app.get("/explore/AI/cons/", function (req, res) {
    res.sendFile(__dirname + '/public/ai_cons.html');
});


app.get("/explore/AI/real/", function (req, res) {
    res.sendFile(__dirname + '/public/ai_real.html');
});
app.get("/explore/AI/real/constructive/", function (req, res) {
    res.sendFile(__dirname + '/public/ai_const.html');
});


app.get("/explore/AI/real/destructive/", function (req, res) {
    res.sendFile(__dirname + '/public/ai_des.html');
});



app.listen(3000, function () {
    console.log("server started on port 3000");
});


