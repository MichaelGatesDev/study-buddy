import { Router, Response, Request } from "express";
import { ActionSuccessResponse, ActionErrorResponse } from "@study-buddy/common";

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
    //TODO update school based on request body
    res.status(200).json({ result: _req.body.school } as ActionSuccessResponse<School>);
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
