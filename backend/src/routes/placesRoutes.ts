import { Router } from "express";

import { findPlaceById, findPlaceByUserId } from "../controllers/placesController";

const router = Router();



router.get("/:placeId", findPlaceById);

router.get("/user/:userId", findPlaceByUserId);


export default router;
