import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, ISchool } from "@study-buddy/common";

import School from "../../../../db/models/school";
import User from "../../../../db/models/user";
import Course from "../../../../db/models/course";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const schools = await School.findAll({
        include: [User, Course],
      });
      res.status(200).json({ result: schools } as ActionSuccessResponse<ISchool[]>);
    } catch (error) {
      if (error.parent === undefined) {
        console.error("Error: " + error.message);
        res.status(500).json({ error: error.message } as ActionErrorResponse);
      } else {
        console.error("Error: " + error.parent.sqlMessage);
        res.status(500).json({ error: error.parent.sqlMessage } as ActionErrorResponse);
      }
    }
  }
);

// Export the base-router
export default router;
