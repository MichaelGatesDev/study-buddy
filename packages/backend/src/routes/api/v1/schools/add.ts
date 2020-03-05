import { Router, Response, Request } from "express";

import { School } from '../../../../db/models/school';

// Init router and path
const router = Router();


router.post("/", async (_req: Request, res: Response): Promise<void> => {
    try {
        const name = _req.body.name;
        const website = _req.body.website;

        const count = await School.count({ where: { website } });
        if (count > 0) {
            throw "A school with that website already exists in the database!";
        }

        const createdUser = await School.create({
            "name": name,
            "website": website
        });
        res.status(200).json(createdUser);
    } catch (error) {
        console.error("Error: " + error);
        res.status(500).json({ error });
    }
});


// Export the base-router
export default router;
