const fs = require("fs");
const { resolve } = require("path");
const superagent = require ("superagent");


const readFilePro = file => {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) reject ('I could not find the file')
            resolve(data);
        })

    })
}

readFilePro(`${__dirname}/dog.txt`).then(result => {


    console.log(`Breed: ${data}`);

    superagent 
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .then(res => {
        console.log(res.body.messages);
        
        
        fs.writeFile('dog-ing.txt', res.body.messsage, err => {
            console.log('Random dog image saved to file!');
        });
    })
    .catch(err => {
        console.log(err.message);
    });
    
});