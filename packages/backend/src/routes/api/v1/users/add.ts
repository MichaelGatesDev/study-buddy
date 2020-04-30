import { Router, Response, Request } from "express";

import User from "../../../../db/models/User";

// Init router and path
const router = Router();

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const school_id = _req.body.school_id;
      const email = _req.body.email;

      const count = await User.count({ where: { email } });
      if (count > 0) {
        throw "A user with that email already exists in the database!";
      }

      const createdUser = await User.create({
        school_id: school_id,
        email: email,
      });
      res.status(200).json(createdUser);
    } catch (error) {
      console.error("Error: " + error);
      res.status(500).json({ error });
    }
  }
);

// Export the base-router
export default router;
