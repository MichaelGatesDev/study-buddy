import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse } from "@study-buddy/common";

import School from "../../../../db/models/school";

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
      res.status(200).json({ result: schools } as ActionSuccessResponse<School[]>);
    } catch (error) {
      console.error("Error: " + error.parent.sqlMessage);
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
