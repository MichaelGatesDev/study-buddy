import { Router, Response, Request } from "express";

import { ActionSuccessResponse } from "@study-buddy/common";

import School from "../../../../db/models/school";
import User from "../../../../db/models/user";
import Course from "../../../../db/models/course";

// Init router and path
const router = Router();

router.post(
  "/",
  async (_req: Request, res: Response): Promise<void> => {
    try {
      const name = _req.body.name;
      const website = _req.body.website;

      const count = await School.count({ where: { website } });
      if (count > 0) {
        throw "A school with that website already exists in the database!";
      }

      const createdSchool = await School.create(
        {
          name: name,
          website: website,
        },
        {
          include: [User, Course],
        }
      );
      res.status(200).json({ result: createdSchool } as ActionSuccessResponse<School>);
    } catch (error) {
      console.error("Error: " + error);
      res.status(500).json({ error });
    }
  }
);

// Export the base-router
export default router;
