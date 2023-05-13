
//  METHOD 1: for importing from other file
// import {info,error} from './utils/logger.mjs';

// import { printError } from "./utils/logger.mjs";




// console.log(info);
// info('i am a console function buddy');
// console.log(error);
// error('i am error function buddy');


// METHOD 2 importing from other files

// import * as logger from './utils/logger.mjs'
// logger.info('i am console method');

// METHOD 3 importing from other files

// import {info as printInfoMessage,error as printErrorMessage} from './utils/logger.mjs'

// printInfoMessage('heya i printing information regarding app')
// printErrorMessage('hey i am printing error information ')


// method2 of export check
// printError('eroor')


// method3 of export check

// import User from './utils/logger.mjs'

// console.log(new User('John'));


import http from 'http';
import config from './utils/config.js';
import app from './app.js';
import {info} from './utils/logger.js';
const server=http.createServer(app);
server.listen(config.PORT,()=>{
    info(`server is running on port ${config.PORT}`);
})



