document.getElementById('info_link').addEventListener('click',function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname+'/public/ai_pros.html');
        res.redirect('https://vittana.org/16-artificial-intelligence-pros-and-cons');
    });
});