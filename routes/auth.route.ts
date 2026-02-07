import { Router } from "express";
import { signup } from "../controller/auth.controller";
import { validateSignup } from "../middlewares/validate.middleware";

const router = Router();

router.post("/signup", validateSignup, signup);

export default router;
