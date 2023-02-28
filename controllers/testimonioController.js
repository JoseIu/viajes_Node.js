import { Testimonio } from '../models/Testimonio.js';

const guardarTestimonio = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // console.log(req.body);
  //validamos el form
  const errores = [];
  if (nombre.trim() === '') {
    errores.push({ mensaje: 'El nombre esta vacio' });
  }
  if (email.trim() === '') {
    errores.push({ mensaje: 'El correo esta vacio' });
  }
  if (mensaje.trim() === '') {
    errores.push({ mensaje: 'El mensaje esta vacio' });
  }

  if (errores.length > 0) {
    //consultamos testimoniales existentes
    const testimoniales = await Testimonio.findAll();
    //mostramos la vista con los errores
    res.render('testimonios', {
      pagina: 'Testimonios',
      errores,
      nombre,
      email,
      mensaje,
      testimoniales
    });
  } else {
    //Almacenamos en la bases de datos
    try {
      await Testimonio.create({
        nombre,
        email,
        mensaje
      });
      res.redirect('/testimonios');
    } catch (error) {
      console.log(error);
    }
  }
};

export default guardarTestimonio;
