var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article-one={
    title:'article-one Balaji Mude',
    heading:'Article-one',
    date:s'ep 5 2016',
    content:'<p>
                This is first content First Article
             </p>
             <p>Cloud computing is a type of Internet-based computing that provides shared computer processing resources and data to computers and other devices on demand. It is a model for enabling ubiquitous, on-demand access to a shared pool of configurable computing resources (e.g., computer networks, servers, storage, applications and services),[1][2] which can be rapidly provisioned and released with minimal management effort.
             </p>'
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
      res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
