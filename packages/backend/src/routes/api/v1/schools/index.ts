import { Router, Response, Request } from "express";
import { School } from "../../../../db/models/school";

import addRoute from "./add";
import deleteRoute from "./delete";

// Init router and path
const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const schools = await School.findAll({
        attributes: {
          exclude: [],
        },
      });
      res.status(200).json(schools);
    } catch (error) {
      console.error("Error: " + error.parent.sqlMessage);
      res.status(500).send(error);
    }
  }
);

router.param("schoolID", async function (req, res, next, id) {
  try {
    const school = await School.findOne({
      where: { id },
    });
    req.body.school = school;
    next();
  } catch (error) {
    next(new Error(error.parent.sqlMessage));
  }
});

router.use("/add", addRoute);
router.use("/delete/:schoolID", deleteRoute);

// Export the base-router
export default router;
