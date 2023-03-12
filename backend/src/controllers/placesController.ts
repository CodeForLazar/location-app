import { RequestHandler } from "express";

import Place from "../models/Place";
import { getCoordsFromAdress } from "../utils/location";
import HttpError from "../utils/HttpError";


export const findPlaceById: RequestHandler = async (req, res, next) => {
   try {
      const palceId = req.params.placeId;
      const place = await Place.findById(palceId);

      if (!place) {
         throw next(new HttpError("No such place buddy", 404));
      }
      res.status(200).json({ place });
   }
   catch (err) {
      next(err);
   }
}

export const findPlacesByUserId: RequestHandler = async (req, res, next) => {
   try {
      const userId = req.params.userId;
      const places = await Place.findOne({ creator: userId });

      if (!places) {
         throw next(new HttpError("No such user buddy", 404));
      }
      res.status(200).json({ places });
   }
   catch (err) {
      next(err);
   }

}

export const createPlace: RequestHandler = async (req, res, next) => {
   const { address } = req.body;
   try {
      const coordinates = await getCoordsFromAdress(address);
      const place = await Place.create({
         ...req.body,
         location: coordinates
      });

      res.status(201).json({ place });
   }
   catch (err) {
      next(err);
   }
};

export const updatePlace: RequestHandler = async (req, res, next) => {
   const palceId = req.params.placeId;
   try {
      const updatedPlace = await Place.findByIdAndUpdate(palceId, req.body, { new: true });

      res.status(200).json({ updatedPlace });
   }
   catch (err) {
      next(err);
   }

}

export const deletePlace: RequestHandler = async (req, res, next) => {
   const palceId = req.params.placeId;
   try {
      await Place.findByIdAndDelete(palceId);

      res.status(204).json({ message: "Palce deleted!" });
   }
   catch (err) {
      next(err);
   }

}