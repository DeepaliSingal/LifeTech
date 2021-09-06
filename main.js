const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'/public')));
app.get("/",function(req,res){
    res.sendFile(__dirname+'/public/intro.html');
});
app.get("/explore/AI/",function(req,res){
    res.sendFile(__dirname+'/public/ai.html')
});
app.get("/explore/log_in/",function(req,res){
    res.sendFile(__dirname+'/public/log_in.html')
});
app.get("/explore/sign_up/",function(req,res){
    res.sendFile(__dirname+'/public/sign_in.html')
});
app.get("/explore/tech/",function(req,res){
    res.sendFile(__dirname+'/public/tech.html')
});
app.get("/explore/AI/pros/",function(req,res){
    res.sendFile(__dirname+'/public/ai_pros.html');
});
app.get("/explore/AI/cons/",function(req,res){
    res.sendFile(__dirname+'/public/ai_cons.html');
});
app.get("/explore/AI/real/",function(req,res){
    res.sendFile(__dirname+'/public/ai_real.html');
});
app.get("/explore/AI/real/constructive/",function(req,res){
    res.sendFile(__dirname+'/public/ai_const.html');
});
app.get("/explore/AI/real/destructive/",function(req,res){
    res.sendFile(__dirname+'/public/ai_des.html');
});

app.listen(3000,function(){
    console.log("server started on port 3000");
});


