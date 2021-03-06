import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse } from "@study-buddy/common";

import User from "../../../../db/models/user";
import School from "../../../../db/models/school";
import Course from "../../../../db/models/course";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.findAll({
        include: [School, Course],
      });
      res.status(200).json({ result: users } as ActionSuccessResponse<User[]>);
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
