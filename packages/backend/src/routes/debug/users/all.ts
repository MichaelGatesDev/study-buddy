import { Router, Response, Request } from "express";

import { User } from '../../../db/models/user';

// Init router and path
const router = Router();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        console.log(users);
        res.status(200).render('debug/users/all', { users });
    } catch (error) {
        console.error("Error: " + error.parent.sqlMessage);
        res.status(500).send(error);
    }
});

// Export the base-router
export default router;
