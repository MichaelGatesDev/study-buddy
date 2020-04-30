import { Router, Response, Request } from "express";
import School from "../../../db/models/School";

// Init router and path
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const schools = await School.findAll();
    res.status(200).render("admin/schools/all", { schools });
  } catch (error) {
    console.error("Error: " + error.parent.sqlMessage);
    res.status(500).send(error);
  }
});

// Export the base-router
export default router;
