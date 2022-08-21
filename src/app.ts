import express, { Express } from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
import logger from '@/app/middleware/log';
import routers from '@/routes/index';
import path from 'path';

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
logger(app);
routers(app);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});