import { Router, Response, Request } from "express";

import { User } from "../../../../db/models/user";

// Init router and path
const router = Router();

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const user: User = _req.user;
    try {
      await user.destroy();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

// Export the base-router
export default router;
