import express from 'express';

//initialize the server
const app = express();

//route just for testing purposes for now
app.get('/', (req,res) => {
    res.send('<h1>Hello world! IIIIIt woooooorks hahhahahahahaha</h1>')
});

const PORT = 2000;
//listen to the server
app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
})