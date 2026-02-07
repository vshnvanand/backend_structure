import type { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function signup(req: Request, res: Response) {
  const user = await authService.signup(req.body);
  res.status(201).json(user);
}
