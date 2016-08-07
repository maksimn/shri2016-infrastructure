'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const getFace = require('cool-ascii-faces');

const app = express();

app.set('port', process.env.PORT || 5000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    console.time('render');
    response.render('index', { face: getFace() });
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});
