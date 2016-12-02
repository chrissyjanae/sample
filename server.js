var express = require('express');
var app = express();
var PORT = 3000;


// app.get('/', function(req, res){
//     res.send('Hello students');
// });

// app.get('/about', function (req, res) {
//     res.send('This is the about page');
// });

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req, res) {
    res.send('This is the about page');
});



app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server has started on port: ' + PORT);
});


