import express from 'express';
import db from './config/db.js';
import router from './routes/index.js';

const app = express();

//Conectar db
db.authenticate()
  .then(() => console.log('conectado'))
  .catch(error => console.log(error));

//Definimos puerto
const port = process.env.PORT || 3005;

//habilitando pug
app.set('view engine', 'pug');

//Obetener año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  next();
});

//Agregar body parser para leer los datos del form
app.use(express.urlencoded({ extended: true }));

//Definir la carpeta pública
app.use(express.static('public'));

//Agregar Router
app.use('/', router);

app.listen(port, () => {
  console.log(`El servidor esta funcionando en el puerto ${port}`);
});
