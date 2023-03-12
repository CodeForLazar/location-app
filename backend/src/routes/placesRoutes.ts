import { Router } from "express";
import { createPlaceValidator, updatePlaceValidator } from "../validators/placesValidators";

import { findPlaceById, findPlacesByUserId, createPlace, deletePlace, updatePlace } from "../controllers/placesController";

const router = Router();



router.get("/:placeId", findPlaceById);

router.get("/user/:userId", findPlacesByUserId);

router.post("/", createPlaceValidator, createPlace);

router.put("/:placeId", updatePlaceValidator, updatePlace);

router.delete("/:placeId", deletePlace);

export default router;
