// const Person = require('./car');

// let Nino = new Person('Maggie', 20)

// Nino.greetings()

const Logger = require('./logger')

const logger = new Logger();

logger.on('message', (data) => console.log('called listener: ',data));

logger.log("It works!")