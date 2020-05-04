import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse, ISchool } from "@study-buddy/common";

import School from "../../../../db/models/school";

const router = Router();

router.get(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({ result: _req.body.school } as ActionSuccessResponse<School>);
  }
);

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    const school = _req.body.school as School;
    const updatedSchool = _req.body.updated_school as ISchool;

    // update possible fields
    if (updatedSchool.ipeds !== undefined && updatedSchool.ipeds !== null) school.ipeds = updatedSchool.ipeds;
    if (updatedSchool.display_name !== undefined && updatedSchool.display_name !== null) school.display_name = updatedSchool.display_name;
    if (updatedSchool.is_verified !== undefined && updatedSchool.is_verified !== null) school.is_verified = updatedSchool.is_verified;
    if (updatedSchool.website !== undefined && updatedSchool.website !== null) school.website = updatedSchool.website;

    try {
      await school.save();
      res.status(200).json({ result: school as ISchool } as ActionSuccessResponse<School>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

router.post(
  "/delete",
  async (_req: Request, res: Response): Promise<void> => {
    const school: School = _req.body.school;
    try {
      await school.destroy();
      res.status(200).json({ result: school } as ActionSuccessResponse<School>);
    } catch (error) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    }
  }
);

// Export the base-router
export default router;
