import { Router } from "express";

const router = Router();

import userRoutes from "./userRoutes";
import placesRoutes from "./placesRoutes";


router.use("/api/user", userRoutes);
router.use("/api/places", placesRoutes);


export default router;