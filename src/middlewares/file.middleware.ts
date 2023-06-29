// Middleware used for file handling

import { NextFunction, Request, Response } from "express";
import formidable from "formidable";

export interface FileRequest extends Request {
  files: any;
}
const fileMiddleware = (
  req: FileRequest,
  res: Response,
  next: NextFunction
) => {
  const form = formidable({
    multiples: true,
    uploadDir: "__dirname/../uploads",
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    const { newFilename }: any = files.productImage;
    req.files = newFilename;
    next();
  });
};

export default fileMiddleware;
