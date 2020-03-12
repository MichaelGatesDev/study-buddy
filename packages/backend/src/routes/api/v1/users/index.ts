import { Router, Response, Request } from "express";
import { User } from "../../../../db/models/user";

import addRoute from "./add";
import deleteRoute from "./delete";

// Init router and path
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
      res.status(200).json(users);
    } catch (error) {
      console.error("Error: " + error.parent.sqlMessage);
      res.status(500).send(error);
    }
  }
);

router.param("userID", async function(req, res, next, id) {
  try {
    const user = await User.findOne({
      where: { id },
    });
    req.user = user;
    next();
  } catch (error) {
    next(new Error(error.parent.sqlMessage));
  }
});

router.use("/add", addRoute);
router.use("/delete/:userID", deleteRoute);

// Export the base-router
export default router;
