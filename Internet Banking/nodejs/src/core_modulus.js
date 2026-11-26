// /*file: file system
// cocpyfirl
// rename file
// append file
// unlink
// rewrite file
// ...............................
// mkdir
// stat
// readdir: 'readDirectory'*/

// const fs = require('fs');
// const EventEmitter = require('events');
// // writefile
// async function fileWriter() {
//     await fs.writeFile('./text2.txt', 'first line of text\nsecond line of text\nthird line of text\nfourth line of text\nfifth line of text\nsixth line of text ', (err) => {
//         if (err) {
//             console.log('error writing file:', err);
//         }
//         console.log('file written successfully');
//     })
// }
// // fileWriter();

// // AppendFile
// async function fileAppender() {
//     await fs.appendFile('./text2.txt', '\n.fifth line of text appended', (err) => {
//         if (err) {
//             console.log('error appendingn file');
//         }
//         console.log('file written successfully');
//     })
// }
// // fileAppender();

// // readFile
// async function fileReader() {
//     await fs.readFile('./text2.txt', 'utf-8', async (err, data) => {
//         if(err) {
//             console.log('error reading file: ', err);
//         }
//         let text = data;
//         await fs.writeFile('./text3', text, (err) => {
//             if (err){
//                 console.log(err);
//             }
//             console.log('Message was successful');
//         });
//         console.log(data);
//     })
// }
// // fileReader();

// // Copyfile
// async function fileCopier(){
//     fs.copyFile('./text3.txt', './text4.txt', (err) => {
//         if (err) {
//         console.log(err.message);
//         return;
//         }
//         console.log('File is successfully copied');
//     })
// }
// // fileCopier();

// // rename()

// async function fileRename() {
//     await fs.rename('./text4.txt', './text1.txt', (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         console.log('File renamed successfully');
//     })
// }
// // fileRename();

// //Unlink():- to delete a file

// async function fileDelete() {
//     await fs.unlink('./text2.txt', (err) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log('File deleted successfully!');
//     })
// }
// // fileDelete();

// //mkdir() to create a directory or a folder
// async function createFolder() {
//     await fs.mkdir('./training', (err) => {
//         if (err) {
//             console.log(err.message);
//         }
//         console.log('directory is successfully has been created');
//     })
// }
// // createFolder();



// //creating a file inside a folder
// async function fsActivity() {
//     await fs.mkdir('./test_folder', async (err) => {
//         if (err) {
//             console.log(err.message);
//             return;
//         }
//         console.log('Folder created successfully');
//         await fs.writeFile('./test_folder/test.txt', 'Javascript/nodejs is amazing!', (err) => {
//             if (err) {
//                 console.log(err.message);
//                 return;
//             }
//             console.log('file is created successfully');
//         })
//     })
// }
// // fsActivity();

// // readdir() to read content of a folder
// // async function readFolder() {
// //      await fs.readdir('./nodejs', (err, files) => {
// //         if (err) {
// //             console.log(err.message);
// //         }
// //         let folderContent = files;
// //         console.log(folderContent);
// //         await fs.stat('./nodejs', (err, stat) => {
// //             if (err) console.log(err.message);
// //             let stats = stat;
// //             console.log(stat);
// //         })
// //     })
// // }
// // // readFolder();

// // async function readdir() {
// //     const data = await fs.stat('./nodejs/test.html');
// //     console.log(data);
// // }
// // data();

// // event, stream, http
// // events: on, emit, once

// // const studentData = [
// //     {
// //         name: 'student 1', score: 45,
// //     },
// //     {
// //         name: 'student 2', score: 35,
// //     },
// //     {
// //         name: 'student 3', score: 38,
// //     },
// //     {
// //         name: 'student 4', score: 40,
// //     },
// //     {
// //         name: 'student 5', score: 65,
// //     }
// // ]


// // const studentEvents = new EventEmitter();
// // studentEvents.on('success', () => {
// //     let msg = 'This student is successful';
// //     console.log(msg);
// // });

// // studentEvents.once('failure', () => {
// //     let msg = 'This student has failed';
// //     console.log(msg);
// // });

// // for (let x = 0; x < studentData.length; x++) {
// //     if(studentData[x].score < 40) {
// //         let msg = `${studentData[x].name} has low score!`
// //         console.log(msg);
// //     } else if (studentData[x].score >= 40) {
// //         let msg = `${studentData[x].name} has a high score!`
// //         console.log(msg);
// //         studentEvents.emit('success');
// //     }
// // }


// // const staff = [
// //    {
// //     name: 'staff 1', age: 60,
// // },
// //  {
// //     name: 'staff 2', age: 66,
// // },
// //  {
// //     name: 'staff 3', age: 45,
// // }
// // ]

// // const staffEvents = new EventEmitter();
// // staffEvents.on('near_retirement', () => {
// //     let age = 'you are near retirening';
// //     console.log(age);
// // });

// // staffEvents.once('young staff', () => {
// //     let age = 'you are a young staff';
// //     console.log(age);
// // });

// // staffEvents.once('retired', () => {
// //     let age = 'you are a retired person';
// //     console.log(age);
// // });

// // for (let y = 0; y < staff.length; y++) {
// //     if(staff[y].age <= 60 && staff[y].age > 50) {
// //         let age = `${staff[y].name} is yet to be retired!`
// //         console.log(age);
// //         staffEvents.emit('near_retirement');
// //     } else if (staff[y].age <= 45) {
// //         let age = `${staff[y].name} is a young working staff!`
// //         console.log(age);
// //         staffEvents.emit('young staff');
// //     } else if(staff[y].age >=60) {
// //         let age = `${staff[y].name} is retired!`
// //         console.log(age);
// //         staffEvents.emit('retired');
// // }}

// // streaming: stream-events, data, end, errorr, finish.

// // const readStream = fs.createReadStream('./nodejs/src/text2.txt', {encoding: utf-8});

// // readStream.on('data', (chunk) => {
// //     console.log('Some data have been recieved');
// //     console.log(`Data Chunk: ${chunk}`);
// // });

// // readStream.on('end', () => {
// //     console.log('data has finished streaming');
// // })

// // readStream.on('error', (err) => {
// //     console.log(`Error streaming data ${err}`);
// // })

// // createWriteStream

// const writeStream = fs.createWriteStream('./nodejs/src/writeStream.txt');
// async function handleWriteOperation() {
//     await writeStream.write('first line of the data\n');
//     await writeStream.write('second line of the data\n');
//     await writeStream.write('third line of the data\n');
//     await writeStream.end('done\n');
// }
// writeStream.on('finish', () => {
//     console.log('Data written successfully');
// });

// // handleWriteOperation();

// //pipe
// // let pipeReadStream = fs.createReadStream('./nodejs/src/text2.txt', {encoding: 'utf-8'});
// // let pipeWriteStream = fs.createWriteStream('./nodejs/src/pipeStream.txt');
// // pipeReadStream.pipe(pipeWriteStream);
// // pipeReadStream.on('finish', () => {
// //     console.log('data piping has being completed');
// // });

// const writeStreamActivity = fs.createWriteStream('./nodejs/src/readStream.txt');
// async function ReadStreamActivity() {
//     await writeStreamActivity.write('1st write activity\n');
//     await writeStreamActivity.write('2nd write activity\n');
//     await writeStreamActivity.write('3rd write activity\n');
//     await writeStreamActivity.end('finish\n');
// }
// writeStreamActivity.on('finish', () => {
//     console.log('Activity written successfully');
// });

// ReadStreamActivity();

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'text/plane') {
        res.writeHead(200, {'Content-Type': 'text/json'});
        res.end('Our server is up and running');
    }
    else if (req.url === '/user' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({id: 0, user: 'annomynous'}));
    }
    else if (req.url === '/user/data' && req.method === 'POST') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        let data = req.
        res.end(JSON.stringify({id: 0, user: 'annomynous'}));
    }
});

server.listen(4000, () => {
    console.log('server listening on local host port 4000');
});