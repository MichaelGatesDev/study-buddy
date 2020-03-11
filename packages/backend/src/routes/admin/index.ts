import { Router, Response, Request } from "express";
import usersRoute from './users';
import schoolsRoute from './schools';

// Init router and path
const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.render('admin/index', { title: 'Hey', message: 'Hello there!' })
});

// Add sub-routes
router.use('/users', usersRoute);
router.use('/schools', schoolsRoute);

// Export the base-router
export default router;
