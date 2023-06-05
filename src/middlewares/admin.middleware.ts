import { NextFunction, Request, Response } from "express";

interface AdminRequest extends Request {
  user: any;
}

const adminMiddleware = async (
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  const admin = req.user.role.incudes("admin");
  if (!admin) {
    return res.status(400).json({ msg: `Only Admin can access this route` });
  }
  next();
};
export default adminMiddleware;
