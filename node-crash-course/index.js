const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res) =>{
//     if(req.url === '/'){
//         fs.readFile(path.join(__dirname, 'public', 'home.html'), 
//         (err, content) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type':'text/html'});
//             res.end(content);
//         });
//       }
//     if(req.url === '/about'){
//       fs.readFile(path.join(__dirname, 'public', 'about.html'), 
//       (err, content) => {
//           if (err) throw err;
//           res.writeHead(200, { 'Content-Type':'text/html'});
//           res.end(content);
//       });
//     }

//   if(req.url === 'api/users') {
//         const users = [
//             {name: "Sally", age: 40}
//         ];
//         res.writeHead(200, { 'Content-Type':'application/json'})
//         res.end(JSON.stringify(users))
//     }

// Build file path
let filePath = path.join(__dirname, 'public', req.url === '/' ? 'home.html': req.url);

//extension of the file
let extname = path.extname(filePath);

// check ext and set content type
switch(extname){
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;    
    case '.json':
        contentType = 'application/json';
        break;
    case '.html':
        contentType = 'text/html';
        break;
}

// Read file
fs.readFile(filePath, (err,content) =>{
    if(err) {
        if(err.code == 'ENOENT') {
            //Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), 
            (err,content) => {
                res.writeHead(200, { 'Content-Type': 'text/html'});
                res.end(content, 'utf8');
            }
            )
        }
        else {
            //server error
            res.writeHead(500);
            res.end(`Server error: ${err.code}`);
        }
        
    }

    else {
        //Success
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.end(content, 'utf8');
    }
});
    
});
    
   


server.listen('3000', () => {
    console.log('server running at 3000');
});