import { Router, Response, Request } from "express";

// Init router and path
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  res.status(200).render("admin/schools/add", {});
});

// Export the base-router
export default router;
