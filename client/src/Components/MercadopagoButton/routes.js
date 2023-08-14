// routes.js
import { Router } from 'express';
import { createOrder, receiveWebhook } from './payment.controller'; // Ajusta la ruta según tu estructura

const router = Router();

router.post('/create-order', createOrder);
router.post('/webhook', receiveWebhook);
router.get('/success', (req, res) => res.send('Success'));

export default router;
