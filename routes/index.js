import { Router } from 'express';
import { paginaInfo, paginaInicio, paginaNosotros, paginaTestimonios, paginaViajes } from '../controllers/paginaController.js';
import guardarTestimonio from '../controllers/testimonioController.js';

const router = Router();

// req - lo que eenviamos: res- lo que express nso responde
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaInfo);

router.get('/testimonios', paginaTestimonios);
router.post('/testimonios', guardarTestimonio);

export default router;
