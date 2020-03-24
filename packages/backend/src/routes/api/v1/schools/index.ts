import { Router, Response, Request } from "express";
import { School } from "../../../../db/models/school";

import addRoute from "./add";

// Init router and path
const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const schools = await School.findAll({
        attributes: {
          exclude: [],
        },
      });
      res.status(200).json(schools);
    } catch (error) {
      console.error("Error: " + error.parent.sqlMessage);
      res.status(500).send(error);
    }
  }
);

router.use("/add", addRoute);

// Export the base-router
export default router;