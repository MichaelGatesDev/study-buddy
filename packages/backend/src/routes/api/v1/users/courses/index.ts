import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ICourse } from "@study-buddy/common";

import User from "../../../../../db/models/user";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user = _req.body.user as User;
    res.status(200).json({ result: await user.getCourses() } as ActionSuccessResponse<ICourse[]>);
  }
);

import addRoute from "./add";
router.use("/add", addRoute);

// Export the base-router
export default router;
