import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, ICourse } from "@study-buddy/common";

import Course from "../../../../db/models/course";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ result: _req.body.course } as ActionSuccessResponse<ICourse>);
  }
);

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const course = _req.body.course as Course;
    const updatedCourse = _req.body.updated_course as ICourse;

    // update possible fields
    if (updatedCourse.course_number !== undefined && updatedCourse.course_number !== null) course.course_number = updatedCourse.course_number;
    if (updatedCourse.course_title !== undefined && updatedCourse.course_title !== null) course.course_title = updatedCourse.course_title;
    if (updatedCourse.is_active !== undefined && updatedCourse.is_active !== null) course.is_active = updatedCourse.is_active;
    if (updatedCourse.school_id !== undefined && updatedCourse.school_id !== null) course.school_id = updatedCourse.school_id;

    try {
      await course.save();
      res.status(200).json({ result: course as ICourse } as ActionSuccessResponse<ICourse>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

router.post(
  "/delete",
  async (_req: Request, res: Response): Promise<void> => {
    const course: Course = _req.body.course;
    try {
      await course.destroy();
      res.status(200).json({ result: course } as ActionSuccessResponse<ICourse>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
