import { config } from "dotenv";
import { ConnectDB } from "./config/db";
import express from "express";

import router from "./routes";
import errorHandler from "./middleware/errorHandler";

config();
ConnectDB();

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
   console.log(`Server running on port ${process.env.PORT}`)
});