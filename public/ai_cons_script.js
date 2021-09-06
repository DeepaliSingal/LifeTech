document.getElementById('info_link').addEventListener('click',function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname+'/public/ai_cons.html');
        res.redirect('https://vittana.org/16-artificial-intelligence-pros-and-cons');
    });
});