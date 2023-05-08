const fs = require('fs');
const path = require('path');
const {readdir} = require('node:fs/promises');
const {stat} = require('node:fs')


const filterFiles = async()=>{
try {
    const files = await readdir(path.join(__dirname, 'secret-folder'));
    for (const file of files){ 
        let fileSrc = path.join(__dirname, 'secret-folder',`${file}`);
        const fileParse = path.parse(fileSrc);
        stat(fileSrc, (err, stats) => {
            if(!(stats.size === 0)){
                console.log(`${fileParse.name} - ${fileParse.ext.slice(1)} - ${stats.size * 0.001}кб`);
            }
        });    
    }
} catch (err) {
    console.error(err);
}
}
filterFiles()