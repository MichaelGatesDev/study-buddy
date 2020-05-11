import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, IUser, ISchool } from "@study-buddy/common";

import User from "../../../../db/models/user";

import coursesRoute from "./courses";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    res.status(200).json({ result: user } as ActionSuccessResponse<IUser>);
  }
);

router.use("/courses", coursesRoute);

router.get(
  "/school",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    res.status(200).json({ result: await user.getSchool() } as ActionSuccessResponse<ISchool>);
  }
);

// update user
router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    const updatedUser = _req.body.updated_user as IUser;

    // update possible fields
    if (updatedUser.school_id !== undefined && updatedUser.school_id !== null) user.school_id = updatedUser.school_id;

    try {
      const savedUser = await user.save();
      res.status(200).json({ result: savedUser } as ActionSuccessResponse<IUser>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// delete user
router.post(
  "/delete",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    try {
      await user.destroy();
      res.status(200).json({ result: user } as ActionSuccessResponse<IUser>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
