import { Router, Response, Request } from "express";

import { ActionSuccessResponse, ICourse } from "@study-buddy/common";

import Course from "../../../../db/models/course";
import School from "../../../../db/models/school";

// Init router and path
const router = Router();

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const school_id = _req.body.school_id;
      const course_number = _req.body.course_number;
      const course_title = _req.body.course_title;

      const count = await Course.count({ where: { school_id, course_number, course_title } });
      if (count > 0) {
        throw new Error("A school with that website already exists in the database!");
      }

      const createdCourse = await Course.create(
        {
          school_id,
          course_number,
          course_title,
        },
        {
          include: [School],
        }
      );
      res.status(200).json({ result: createdCourse } as ActionSuccessResponse<ICourse>);
    } catch (error) {
      console.error("Error: " + error);
      res.status(500).json({ error });
    }
  }
);

// Export the base-router
export default router;
