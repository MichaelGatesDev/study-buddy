import { Router, Response, Request } from "express";
import apiRoute from './api/';
import debugRoute from './debug/';

// Init router and path
const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.send("base route");
});

// Add sub-routes
router.use('/api', apiRoute);
router.use('/debug', debugRoute);

// Export the base-router
export default router;
