import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse } from "@study-buddy/common";

import User from "../../../../db/models/user";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    console.log(user.school);
    res.status(200).json({ result: user } as ActionSuccessResponse<User>);
  }
);

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    const updatedUser = _req.body.updated_user as User;

    // update possible fields
    user.school_id = updatedUser.school_id;
    user.updatedAt = updatedUser.updatedAt;

    const savedUser = await user.save();

    res.status(200).json({ result: savedUser } as ActionSuccessResponse<User>);
  }
);

router.post(
  "/delete",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    try {
      await user.destroy();
      res.status(200).json({ result: user } as ActionSuccessResponse<User>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
