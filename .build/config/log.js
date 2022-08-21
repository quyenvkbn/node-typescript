import morgan from 'morgan';
import fs from 'fs';
import path from 'path';
let logStream = fs.createWriteStream(path.join('./src/log', 'node.log'));
export default function (app) {
    app.use(morgan('combined', {
        stream: logStream,
        skip: function (req, res) { return res.statusCode < 400; }
    }));
}
