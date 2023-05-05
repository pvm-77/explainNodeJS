

import express from 'express'
const app = express();
import mongoose from 'mongoose';
import config from './utils/config.mjs';
import logger from './utils/logger.mjs'


// db connection 

mongoose.connect(config.MONGODB_URI)
    .then(() => {
        logger.info('connected to MongoDB')
    })
    .catch((error) => {
        logger.error('error connecting to MongoDB:', error.message)
    })

export default app;