import { Router, Response, Request } from "express";
import bcrypt from "bcryptjs";

import { User } from '../../../../db/models/user';

// Init router and path
const router = Router();


router.post("/", async (_req: Request, res: Response): Promise<void> => {
    try {
        const email = _req.body.email
        const password = _req.body.password
        const password_hash = bcrypt.hashSync(password, 8);

        const createdUser = User.create({
            "email": email,
            "password_hash": password_hash
        });
        res.status(200).json(createdUser);
    } catch (error) {
        console.error("Error: " + error.parent.sqlMessage);
        res.status(500).send(error);
    }
});


// Export the base-router
export default router;
