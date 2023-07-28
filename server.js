//TALE ROUTING SE TKOLE DELA FROM SCRATCH. AMPAK ČE IMAŠ VELIK WEBPAGE JETOLE FUL ZAMUDNO ZATO SE DELA S POMOČJO FRAMEWORKA EXPRESS
const http = require('http'); // hypertext transfer protocol. Modul importamo da lahko za internet delamo webpage
const fs = require('fs'); //importamo module; file system
//pac po tem principu oz po tej sabloni se dela 

const _ = require('lodash'); // imporatmo lodash


const server =  http.createServer(function(request, response) { //ustvarimo server s funkcijo create server ki ima dva parametra, zahtevaj in odgovor (request response)
    
    //lodash
    const num = _.random(0,20)
    console.log(num);

    const greet = _.once(function(){
        console.log("hello")
    })

    greet();


    response.setHeader('Context-type', 'text/plain');

    //v mapi views torej pogledi -> imamo html page, ki jih posilamo
    // kot odgovore (response) nazaj uporabniku na spletni strani
    //to je routing narejen preko switcha
    let path = './views/';
    switch(request.url){
        case '/' : 
            path += 'index.html'; 
            response.statusCode = 200; //dodamo da se v konzoli v browserju izpise ta cifra
        break;

        case '/about' : 
            path += 'about.html';
            response.statusCode = 200; //dodamo da se v konzoli v browserju izpise ta cifra
        break;

        case '/about-us' : 
            response.statusCode = 301; //dodamo da se v konzoli v browserju izpise ta cifra
            response.setHeader('Location','/about'); //ce  about-me te vrze na about
            response.end();
        break;

        default: 
            path += '404.html';
            response.statusCode = 404; //dodamo da se v konzoli v browserju izpise ta cifra
        break;
    }

    //posljemo nazaj html file
    fs.readFile(path, function (error, podatki){
        if(error){
            console.log("bil je error");
        }
        else{

            response.end(podatki);
        }
    })

});



server.listen(3000, 'localhost', function(){
    console.log('poslusamo na zahteve na portu 3000')
})


// na intellij je zgleda to dosti lazje preko unih tipk
//tukaj mores pa preko ukazne vrstice git bash se s tem zezat
// zdej sem naredil commite in branche ampak neznam pushat na gitlab
//se zdej neznam pushat na gitlab oz github
// na intellij zgleda lazje tuki je pa crap

//zakaj pa pac ne moremo naredit samo z html css in js
//pac kot za obicen frontend. je delalo isto
// Pac zato ker bomo v nadaljevanju preverjali podatke 
//in za to je backend ?
