import express from 'express';
import dotenv from 'dotenv';
import logger from './app/middleware/log.js';
import routers from './routes/index.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
logger(app);
routers(app);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
