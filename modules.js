const { people, ages } = require('./people');

console.log(people, ages);

const os = require('os');


const fs = require('fs');
//direktorij oz mapa 
if(!fs.existsSync('./sredstva')){
    fs.mkdir('./sredstva', (error) => {
    if(error){
        console.log("bil je error", error);
    }
    console.log('mapa je ustvarjena');
    })
}
else{
    fs.rmdir('./sredstva', (error) => {
        if (error){
            console.log("bil je error");
        }
        console.log('mapa je zbrisana');
    })
}

//brisanje fajla
if(fs.existsSync('./docs/zbrisime.txt')){
    fs.unlink('./docs/zbrisime.txt', (err) => {
        if(err){
            console.log(err);
        }
        console.log('fajl zbrisan')
    })
}



