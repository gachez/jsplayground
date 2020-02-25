const fs = require('fs');
const path = require('path');

// creating a folder
fs.mkdir(path.join(__dirname, '/testfolder2'), {}, err =>{
    if(err) throw err;
    console.log('Folder created succesfully')
    
})

// creating a file
fs.writeFile(
path.join(__dirname, '/testfolder2', 'hello.txt'),
'This is me testin to see if I instructed the computer correctly',
err =>{
    if(err) throw err;
    console.log('File created succesfully... 😀😀')
    
})

//update a file
fs.appendFile(
    path.join(__dirname, '/testfolder2', 'hello.txt'),
    'The next line is what makes it great!!',
    err =>{
        if(err) throw err;
        console.log('File updated succesfully... 😀😀')
        
    })

//Read file
fs.readFile(path.join(__dirname, '/testfolder2', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});    

// Rename file
fs.rename(
    path.join(__dirname, 'testfolder2', 'hello.txt'),
    path.join(__dirname, 'testfolder2(changed)'),
    err => {
        if (err) throw err;
        console.log('File renamed succesfully...');
    }
);

/*
check more at https://nodejs.org/docs/latest-v11.x/api/fs.html#fs_file_descriptors
*/