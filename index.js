const port = 3000;

const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static('web'));
app.use(express.urlencoded({extended:true}));

var skins = fs.readdirSync('./web/skins');
skins = skins.filter(f => f.endsWith('.png'));
var skinNames = skins.map(s => s.slice(0, -4));
var skinsJson = JSON.stringify({names: JSON.stringify(skinNames)});

var galleryHtml = '<link href="assets/css/gallery.css" rel="stylesheet"><div class="row center"><ul>' + skinNames.map(name => '<li class="skin" onclick="changeSkin($(this).find(\'.title\').text())" data-dismiss="modal"><div class="circular" style=\'background-image: url("' + './skins/' + name + '.png")\'></div><h4 class="title">' + name + '</h4></li>').join('') + '</ul></div>';

app.post('/checkdir.php', function(req, res) {
  if(req.xhr &&req.body.action == 'getSkins') {
    res.send(skinsJson);
  }
});

app.get('/include/gallery.php', function(req, res) {
  res.send(galleryHtml);
});

app.listen(port);