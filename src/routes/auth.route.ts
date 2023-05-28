import { Request, Response, Router } from "express";

const auth: Router = Router();

auth.route("/").get((req: Request, res: Response) => {
  res.send(`Hello world`);
});

export default auth;
