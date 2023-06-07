const fs = require('fs');
const readline = require('readline');
const process = require('process');
const axios = require('axios');

const URLS = [];
const path = process.argv[2];

function writeFile(path, data) {
    let strPath = path.toString();
    let strData = data.toString();
    fs.writeFile(strPath, strData, 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`wrote file to ${path}`);
        };
    });
};

function cat(path, err) {
    readline.createInterface({
        input: fs.createReadStream(path),
        terminal: false
    }).on('line', function(line){
       URLS.push(line);
       console.log(URLS);

       
        //let urls = URLS;
        let reqData = URLS.forEach(async (u) => {
        return await axios.get(u.data);
       });
       console.log(reqData);
       let pathName = URLS.forEach(async (r) => {
        return await axios.get(r.hostname);
       });
       console.log(pathName);
       return URLS.forEach(writeFile(pathName, reqData));
}); 
}     

cat(path);