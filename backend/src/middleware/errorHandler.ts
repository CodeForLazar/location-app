import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {


   res.status(err.code || 500).send({ message: err.message || "Server error." })
}


export default errorHandler;