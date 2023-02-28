import { Sequelize } from 'sequelize';
import db from '../config/db.js';

// viajes es la tabla de la BD
export const Testimonio = db.define('testimonios', {
  nombre: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  mensaje: {
    type: Sequelize.STRING
  }
});
