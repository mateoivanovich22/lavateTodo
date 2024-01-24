import express from 'express';
import { engine } from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { sorteo } from './controllers/controllers.js';


const app = express();
const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Listen on port ${PORT}`));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('handlebars', engine());

app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:tuPuerto'); // Reemplaza con la URL de tu cliente
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/', viewsRouter);

