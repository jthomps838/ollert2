import express from 'express';

import HealthController from '../controllers/healthController.js';
import seedDatabase from '../controllers/seedDbController.js';

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: API Health Check
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: documentation about current API
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Health'
 *       500:
 *         description: Internal server error
 */
router.get('/', HealthController.getHealth);

router.get('/seed/only/dev', seedDatabase);

export default router;
