import { Request, Response, Router } from "express";
import { OAuth2Client } from "google-auth-library";

import { ActionSuccessResponse, ActionErrorResponse, IUser } from "@study-buddy/common";

import User from "../../../../db/models/user";
import School from "../../../../db/models/school";
import Course from "../../../../db/models/course";

interface AuthRequest extends Request {
  token?: string;
}

const router: Router = Router({
  mergeParams: true,
});

const CLIENT_ID = "518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

router.post("/connect", async (req: AuthRequest, res: Response) => {
  let token = req.body.token;

  if (token === undefined) {
    res.status(500).json({ error: "No token was associated with the account connect request" });
    return;
  }

  let payload;
  try {
    const loginTicket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    payload = loginTicket.getPayload();
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  if (payload === undefined) {
    res.status(500).json({ error: "No payload associated with login ticket!" });
    return;
  }

  const userID = payload.sub ?? ""; // 12893019340175940719402134
  if (userID === "") {
    res.status(500).json({ error: "Invalid user ID" });
    return;
  }

  const email = payload.email ?? ""; // my.email@domain.ext
  if (email === "" || !email.endsWith(".edu")) {
    res.status(500).json({ error: "Invalid email! Email should not be blank and should end with .edu" });
    return;
  }

  // find connected user
  try {
    let user = await User.findOne({
      where: { google_id: userID },
      include: [{ model: School }, { model: Course }],
    });
    if (user === null) {
      user = await User.create(
        {
          email,
          google_id: userID,
        },
        {
          include: [{ model: School }, { model: Course }],
        }
      );
    }
    const renamedUser = {
      id: user.id,
      created_at: user.created_at,
      updated_at: user.updated_at,
      email: user.email,
      google_id: user.google_id,
      school_id: user.school_id,
      school: (user as any).School,
    } as IUser;
    res.status(200).json({ result: renamedUser } as ActionSuccessResponse<User>);
  } catch (error) {
    if (error.parent === undefined) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    } else {
      res.status(500).json({ error: error.parent.sqlMessage } as ActionErrorResponse);
    }
  }
});

export default router;
