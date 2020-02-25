const http = require('http');

//create server object
http.createServer((req,res) => {
    //write res
    res.write('Hello world. This works')
    res.end()
})
.listen(2000, () => {
    console.log('server running beautifull at port: 2000')
})