document.getElementById('info_link').addEventListener('click',function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname+'/public/ai_real.html');
        res.redirect('https://www.weforum.org/agenda/2017/02/5-global-problems-that-ai-could-help-us-solve/');
    });
});