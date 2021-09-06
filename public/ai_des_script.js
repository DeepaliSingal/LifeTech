document.getElementById('info_link').addEventListener('click',function(){
    app.get("/",function(req,res){
        res.sendFile(__dirname+'/public/ai_real.html');
        res.redirect('https://openiun.com/top-5-reasons-why-artificial-intelligence-can-be-dangerous');
    });
});