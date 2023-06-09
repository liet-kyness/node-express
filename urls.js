const fs = require('fs');
const readline = require('readline');
const process = require('process');
const axios = require('axios');

const URLS = [];
const path = process.argv[2];

// function writeFile(path, data) {
//     let strPath = path.toString();
//     let strData = data.toString();
//     fs.writeFile(strPath, strData, 'utf8', (err) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(`wrote file to ${path}`);
//         };
//     });
// };

function cat(path, err) {
    readline.createInterface({
        input: fs.createReadStream(path),
        terminal: false
    }).on('line', function(line){
       URLS.push(line);
       console.log(URLS);

       
        //let urls = URLS;
        let resData = URLS.map(async (u) => {
        return await axios.get(u.data).toString();
       });
       console.log(resData);
       let pathName = URLS.map(async (u) => {
        return await axios.get(u.hostname).toString();
       });
       console.log(pathName);
       URLS.forEach(async pathName => {
        await fs.writeFile(pathName, resData.toString(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`wrote to ${pathName}`);
            }
        });
       });
}); 
}     

cat(path);