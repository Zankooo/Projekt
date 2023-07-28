//na tak nacin se vedno zacne express
//importamo 
const express = require('express');
// shranimo v spremenljivko, instanco zgleda
const app = express();

//poslusamo zahtevam na portu 3000
//podobno kot v surovem nodejs
app.listen(3000);

app.get('/', function (request, response){
    //unge header funkcije nerabimo vec dajat, express sam naredi
    //zgleda da tudi status code
    //response.send('<p>Prva Stran</p>');
    // to je pa da damo nazaj html page.
    //ce damo samo ./views... bo to absolute path,
    //zato smo mogli dodat se un root:

    response.sendFile('./views/index.html', {root: __dirname})
});

app.get('/about', function (request, response){
    //unge header funkcije nerabimo vec dajat, express sam naredi
    //zgleda da tudi status code
    response.sendFile('./views/about.html', {root: __dirname})
});
