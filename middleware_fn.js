const express = require('express');
const app = express();


// app.use((req, res, next) => {
//   console.log(`A new request recieved at: ${Date.now()}`);

//   next();
// });

//First middleware before response is sent
app.use(function(req, res, next){
  console.log("Start");
  next();
});

//Route handler
app.get('/', function(req, res, next){
  res.send("Middle");
  next();
});



app.use('/things', function(req,res,next){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`A new request recieved at: ${Date.now()}  from ${ip}`);
  next();
});


app.get('/things', function(req,res){
  res.send('Things');
});

app.listen(3000);
