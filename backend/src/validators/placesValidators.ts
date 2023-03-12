import { Request, Response, NextFunction } from "express"
import { body, validationResult } from "express-validator";
import HttpError from "../utils/HttpError";

const title = "title";
const description = "description";
const address = "address";

export const createPlaceValidator = [
   body(title, "title is required")
      .notEmpty(),
   body(description, "Description must be at least 5 characters long.")
      .isLength({ min: 5 }),
   body(address, "adress is required")
      .notEmpty(),
   (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         const message = errors.array().map(err => `${err.msg} `);
         throw next(new HttpError(`${message}`, 422));
      }
      next();
   }
];

export const updatePlaceValidator = [
   body(title, "title is required")
      .notEmpty(),
   body(description, "Description must be at least 5 characters long.")
      .isLength({ min: 5 }),
   (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         const message = errors.array().map(err => `${err.msg} `);
         throw next(new HttpError(`${message}`, 422));
      }
      next();
   }
];

