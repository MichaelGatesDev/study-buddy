import { Router, Response, Request } from "express";
import usersRoute from './users/';

// Init router and path
const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.render('debug/index', { title: 'Hey', message: 'Hello there!' })
});

// Add sub-routes
router.use('/users', usersRoute);

// Export the base-router
export default router;
