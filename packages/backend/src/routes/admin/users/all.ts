import { Router, Response, Request } from "express";

import User from "../../../db/models/user";

// Init router and path
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    res.status(200).render("admin/users/all", { users });
  } catch (error) {
    console.error("Error: " + error.parent.sqlMessage);
    res.status(500).send(error);
  }
});

// Export the base-router
export default router;
