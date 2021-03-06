document.getElementById('github_link').addEventListener('click',function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname+'/public/intro.html');
        res.redirect('https://github.com/deepali2002-max/LifeTech');
    });
});
document.getElementById('ai_link').addEventListener('click',function(){
    app.get("/explore/AI/",function(req,res){
        res.sendFile(__dirname+'/public/ai.html');
    });
});
document.getElementById('tech_link').addEventListener('click',function(){
    app.get("/explore/tech/",function(req,res){
        res.sendFile(__dirname+'/public/tech.html');
    });
});
document.getElementById('login_link').addEventListener('click',function(){
    app.get("/explore/log_in/",function(req,res){
        res.sendFile(__dirname+'/public/log_in.html');
    });
});
document.getElementById('signup_link').addEventListener('click',function(){
    app.get("/explore/sign_up/",function(req,res){
        res.sendFile(__dirname+'/public/sign_in.html');
    });
});
