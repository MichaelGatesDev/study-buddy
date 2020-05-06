import { Request, Response, Router } from "express";
import { OAuth2Client } from "google-auth-library";

import { ActionSuccessResponse, IAuthInfo, ActionErrorResponse } from "@study-buddy/common";

import User, { normalize } from "../../../../db/models/user";
import School from "../../../../db/models/school";
import Course from "../../../../db/models/course";

interface AuthRequest extends Request {
  session?: any;
}

const router: Router = Router({
  mergeParams: true,
});

const CLIENT_ID = "518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

router.post("/", async (req: AuthRequest, res: Response) => {
  try {
    // check if session is authenticated before doing lookup
    if (!req.session.authenticated) {
      throw new Error("Not authenticated!");
    }

    let email = req.body.email;
    let google_id = req.body.google_id;
    if (email === undefined) {
      res.status(500).json({ error: "Missing email/google_id from user lookup" });
      return;
    }

    // find connected user
    let user = await User.findOne({
      where: { email, google_id },
      include: [{ model: School }, { model: Course }],
    });
    // if user does not exist, create a new one
    if (user === null) {
      user = await User.create(
        {
          email,
          google_id,
        },
        {
          include: [{ model: School }, { model: Course }],
        }
      );
    }

    res.status(200).json({ result: normalize(user) } as ActionSuccessResponse<User>);
  } catch (error) {
    if (error.parent === undefined) {
      res.status(500).json({ error: error.message } as ActionErrorResponse);
    } else {
      res.status(500).json({ error: error.parent.sqlMessage } as ActionErrorResponse);
    }
  }
});

router.post("/connect", async (req: AuthRequest, res: Response) => {
  let token = req.body.token;
  if (token === undefined) {
    res.status(500).json({ error: "No token was associated with the account connect request" });
    return;
  }

  try {
    const loginTicket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = loginTicket.getPayload();

    if (payload === undefined) throw new Error("No payload associated with login ticket!");

    const userID = payload.sub ?? ""; // 12893019340175940719402134
    if (userID === "") if (payload === undefined) throw new Error("Invalid user ID");

    const email = payload.email ?? ""; // my.email@domain.ext
    if (email === "" || !email.endsWith(".edu")) throw new Error("Invalid email! Email should not be blank and should end with .edu");

    req.session.authenticated = true;

    // return authenticated info here
    res.status(200).json({ result: { email, google_id: userID } } as ActionSuccessResponse<IAuthInfo>);
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }
});

export default router;
