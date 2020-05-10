import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, IUser } from "@study-buddy/common";

import User from "../../../../../db/models/user";
import Course from "../../../../../db/models/course";

const router = Router();

router.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    const user = req.body.user as User;
    const { course_id } = req.query;

    try {
      if (course_id == null) {
        throw new Error("The ID of the course to register must be specified!");
      }
      const course = await Course.findOne({ where: { id: course_id } });
      if (course == null) {
        throw new Error("No course exists with that ID!");
      }
      if (course.school_id != user.school_id) {
        throw new Error("User can only enroll in courses offered at their school!");
      }
      if (await user.hasCourse(course)) {
        throw new Error("User is already registered to that course!");
      }

      await user.addCourse(course.id);
      const savedUser = await user.save();
      res.status(200).json({ result: savedUser } as ActionSuccessResponse<IUser>);
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
