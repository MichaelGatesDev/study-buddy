import { Router } from 'express';
import usersRoute from './users/';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', usersRoute);

// Export the base-router
export default router;
