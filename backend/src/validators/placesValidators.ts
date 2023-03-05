import { Request, Response, NextFunction } from "express"
import { check, validationResult } from "express-validator";
import HttpError from "../utils/HttpError";

const title = "title";
const description = "description";
const address = "address";

export const createPlaceValidator = [
   check(title).notEmpty(),
   check(description).isLength({ min: 5 }),
   check(address).notEmpty(),
   (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         const message = JSON.stringify(errors.mapped())
         throw next(new HttpError(`${message}`, 422));
      }
      next();
   }
];

