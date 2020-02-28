var express = require('express');
var app = express();


app.set('view engine', 'pug');
app.set('views', './views')

// app.get('/first_template', function(req, res){
//     res.render('first_view');
// });


//Passing Values to Templates
app.get('/dynamic_view', function(req, res){
    res.render('dynamic',{
        name: "Project Square Mars",
        url:  "http://projectmars.atwebpages.com"
    });
});

//Include and Components
app.get('/components', function(req, res){
    res.render('content');
})

app.listen(3001);
