import { Router, Response, Request } from "express";
import apiRoute from "./api/";
import adminRoute from "./admin";

// Init router and path
const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("base route");
});

// Add sub-routes
router.use("/api", apiRoute);
router.use("/admin", adminRoute);

// Export the base-router
export default router;
