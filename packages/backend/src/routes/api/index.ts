import { Router } from 'express';
import v1Route from './v1/';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/v1', v1Route);

// Export the base-router
export default router;
