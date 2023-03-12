import { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator";
import HttpError from "../utils/HttpError";

const name = "name";
const password = "password";
const email = "email";

export const registerUserValidator = [
   body(name, "name is required")
      .notEmpty(),
   body(password, "password must be at least 6 characters long.")
      .isLength({ min: 6 }),
   body(email, "must enter a valid email")
      .normalizeEmail()
      .isEmail(),
   (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         const message = errors.array().map(err => `${err.msg} `);
         throw next(new HttpError(`${message}`, 422));
      }
      next();
   }
];