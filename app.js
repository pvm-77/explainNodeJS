

import express from 'express'
const app = express();
import mongoose from 'mongoose';
import config from './utils/config.js';
import  {info}  from './utils/logger.js';
import {errorLog} from './utils/logger.js';
import { _privateVariable } from './utils/logger.js';
console.log(_privateVariable)
import { middlewareFunction } from './utils/middleware.js';

import arithmetic from './math.js'
// db connection 
// middlewareFunction()  This will cause an error due to circular dependencies.
mongoose.connect(config.MONGODB_URI)
    .then(() => {
        info('connected to MongoDB')
    })
    .catch((error) => {
        errorLog(`error connecting to MongoDB: ${error.message}`)
    })
info(`the sum  of 2 and 4 is ${arithmetic.add(2, 4)}`);
export default app;