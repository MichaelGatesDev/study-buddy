import { Router, Response, Request } from "express";
import School from "../../../db/models/school";

// Init router and path
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  const schools = await School.findAll();
  res.status(200).render("admin/users/add", { schools });
});

// Export the base-router
export default router;
