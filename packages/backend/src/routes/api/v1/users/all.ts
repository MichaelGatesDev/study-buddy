import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse } from "@study-buddy/common";

import User from "../../../../db/models/user";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const users = await User.findAll({
        attributes: {
          exclude: [],
        },
      });
      res.status(200).json({ result: users } as ActionSuccessResponse<User[]>);
    } catch (error) {
      console.error("Error: " + error.parent.sqlMessage);
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
