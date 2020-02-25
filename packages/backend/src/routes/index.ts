import { Router, Response, Request } from "express";
import apiRoute from './api/';

// Init router and path
const router = Router();

router.get("/", (_req: Request, res: Response) => {
    res.send("Hello World");
});

// Add sub-routes
router.use('/api', apiRoute);

// Export the base-router
export default router;
