var ex=require('express');
var app=ex();
app.use(ex.static('public'))
app.set('view engine','ejs')
app.listen(3001);
app.get('/',function(req,res){
    res.render('index')
})