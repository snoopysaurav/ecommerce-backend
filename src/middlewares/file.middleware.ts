// Middleware used for file handling

import { NextFunction, Request, Response } from "express";
import formidable from "formidable";

const fileMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const form = formidable({
    multiples: true,
    uploadDir: "__dirname/../uploads",
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ fields, files });
  });
};

export default fileMiddleware;
