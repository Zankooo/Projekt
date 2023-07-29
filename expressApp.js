//na tak nacin se vedno zacne express
//importamo 
const express = require('express');

// shranimo v spremenljivko, instanco zgleda
const app = express();

app.set('view engine', 'ejs');

//poslusamo zahtevam na portu 3000
//podobno kot v surovem nodejs
app.listen(3000);

//home
app.get('/', function (request, response){
    const blogs = [
        {title: 'yoshi je najde jajce', snippet: 'lorem lorem'},
        {title: 'mario je najde jajce', snippet: 'lorem lorem'},
        {title: 'kako premagat brskalnik', snippet: 'lorem lorem'}
    ]
    response.render('index', {title:'prva stran', blogs: blogs})
});

//about 
app.get('/about', function (request, response){
    response.render('about', {naslov: 'About'})
});



app.get('/blogs/create', function (request, response){
    response.render('create', {naslov: 'create a new blog'});
})

//404 page. Ce nismo prej nic poslali naazaj, se bo to zgodilo
app.use(function (request, response){
    response.status(404).render('404', {naslov: '404'});
})
