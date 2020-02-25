import { Router, Response, Request } from "express";
import { User } from '../../../../db/models/user';

// Init router and path
const router = Router();


router.get("/", async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.findAll({
            attributes: {
                exclude: [
                    'passwordHash',
                    'passwordSalt',
                ]
            }
        });
        res.status(200).json(users);
    } catch (error) {
        console.error("Error: " + error.parent.sqlMessage);
        res.status(500).send(error);
    }
});


// Export the base-router
export default router;
