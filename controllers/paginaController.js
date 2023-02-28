import { Testimonio } from '../models/Testimonio.js';
import { Viaje } from '../models/Viaje.js';

const paginaInicio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimonio.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);

    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'header--inicio',
      travels: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros'
  });
};
const paginaViajes = async (req, res) => {
  //consultar BD
  const travels = await Viaje.findAll();
  //   console.log(travel);

  res.render('viajes', {
    pagina: 'Próximos Viajes',
    travels
  });
};

const paginaTestimonios = async (req, res) => {
  try {
    const testimoniales = await Testimonio.findAll();

    res.render('testimonios', {
      pagina: 'Testimonios',
      testimoniales
    });
  } catch (error) {
    console.log(error);
  }
};
//Muestra viaje por su slug al hacer click en "ver mas"
const paginaInfo = async (req, res) => {
  const { slug } = req.params;

  try {
    const travel = await Viaje.findOne({ where: { slug: slug } });

    res.render('viaje', {
      pagina: 'Información del Viaje',
      travel
    });
  } catch (error) {
    console.log(error);
  }
};

export { paginaInicio, paginaNosotros, paginaViajes, paginaTestimonios, paginaInfo };
