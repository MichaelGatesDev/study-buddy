import { Request, Response, Router } from "express";
import { OAuth2Client } from "google-auth-library";
import { User } from "../../../../db/models/user";

interface AuthRequest extends Request {
  token?: string;
}

const router: Router = Router({
  mergeParams: true,
});

const CLIENT_ID = "518840326133-s2tmf5d49tpkg32iac1ag6rvrsdudcfg.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

async function verifyLogin(idToken: string) {
  const loginTicket = await client.verifyIdToken({
    idToken: idToken,
    audience: CLIENT_ID,
  });

  const payload = loginTicket.getPayload();

  if (payload === undefined) {
    throw Error("No payload associated with login ticket!");
  }

  const userID = payload.sub ?? ""; // 12893019340175940719402134
  const email = payload.email ?? ""; // my.email@domain.ext

  if (userID === "") {
    throw new Error("Invalid userID!");
  }
  if (email === "" || !email.endsWith(".edu")) {
    throw new Error("Invalid email! Email should not be blank and should end with .edu");
  }

  const count = await User.count({ where: { email } });
  if (count > 0) {
    const found = await User.findOne({
      where: {
        google_id: userID,
        email,
      },
    });
    console.log("Found user!");
    return found;
  } else {
    const createdUser = await User.create({
      email,
      google_id: userID,
    });
    console.log("Created new user!");
    return createdUser;
  }
}

router.post("/connect", async (req: AuthRequest, res: Response) => {
  let token = req.body.token;

  if (token === undefined) {
    res.status(500).json({ error: "No token was associated with the account connect request" });
    return;
  }

  try {
    const user = await verifyLogin(token);
    res.status(200).send({ user });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;