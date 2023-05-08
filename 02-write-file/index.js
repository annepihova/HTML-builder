// const { stdin, stdout } = process;
// const fs = require('fs');
// const path = require('path');
// const output = fs.createWriteStream(path.join(__dirname, 'text.txt'),);

// stdout.write('Привет, введи текст\n');

// stdin.on('data', data =>{ 
//     let text = data.toString();
//     if(text === 'mama'){
//         process.exit();
//     }else{
//     stdout.write('файл обновлен\n');
//     output.stdin.on('data',()=> output += text)
//     }
// })

// process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));