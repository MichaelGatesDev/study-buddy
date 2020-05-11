import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, ICourse, GenericParams } from "@study-buddy/common";

import Course from "../../../../db/models/course";
import School from "../../../../db/models/school";

const router = Router();

router.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    const params = (req.query as any) as GenericParams;

    try {
      let courses: ICourse[] = [];
      // school only
      if (params.school_id) {
        courses = await Course.findAll({
          include: [],
          where: {
            school_id: params.school_id,
          },
        });
      }
      // fallback (all)
      else {
        courses = await Course.findAll({
          include: [School],
        });
      }

      res.status(200).json({ result: courses } as ActionSuccessResponse<ICourse[]>);
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
