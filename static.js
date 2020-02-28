var express = require('express');
var app     = express();


app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
app.use(express.static('images'));

app.get('/static_files', function(req, res){
    res.render('static_view');
});

app.listen(3001);

