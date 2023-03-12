import { Router } from "express";

import { login, getUsers, register } from "../controllers/usersController";
import { registerUserValidator } from "../validators/userValidators";

const router = Router();

router.get("/", getUsers);

router.post("/login", login);

router.post("/register", registerUserValidator, register);

export default router;
