import cookieParser from "cookie-parser";
import express from "express";
import { Request, Response } from "express";
import logger from "morgan";
import path from "path";
import cors from "cors";
import session from "express-session";

import BaseRouter from "./routes";

// Init express
const app = express();

// Add middleware/settings/routes to express.
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  session({
    secret: "super secure secret here",
    cookie: { secure: false },
    resave: true,
    saveUninitialized: true,
  })
);
const whitelist = ["http://localhost:3000", "http://localhost:3001", "https://localhost:3000", "https://localhost:3001"];
const configuredCors = cors({
  credentials: true,
  origin: (origin, callback) => {
    if ((origin !== undefined && whitelist.indexOf(origin)) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
});
app.use(configuredCors);
app.options("*", configuredCors);
app.use("/", BaseRouter);
app.use(express.static("public"));

/**
 * Point express to the 'views' directory. If you're using a
 * single-page-application framework like react or angular
 * which has its own development server, you might want to
 * configure this to only serve the index file while in
 * production mode.
 */
const viewsDir = path.join(__dirname, "views");
app.set("views", viewsDir);
app.set("view engine", "ejs");
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));
app.get("*", (req: Request, res: Response) => {
  res.sendFile("index.html", { root: viewsDir });
});

// Export express instance
export default app;
