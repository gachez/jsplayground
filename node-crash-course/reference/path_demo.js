const path = require('path')

//Base filename - gives us the entire path
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'))

//check docs for more 
/* https://nodejs.org/docs/latest-v11.x/api/path.html#path_path_basename_path_ext

*/