import { Router, Response, Request } from "express";

import School from "../../../../db/models/School";

// Init router and path
const router = Router();

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const school: School = _req.body.school;
    try {
      await school.destroy();
      res.status(200).json(school);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

// Export the base-router
export default router;
