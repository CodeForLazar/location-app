import { RequestHandler } from "express";

import HttpError from "../utils/HttpError";

const DUMMY_PLACES = [
   {
      id: 'p1',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
         lat: 40.7484405,
         lng: -73.9878584
      },
      creator: 'u1'
   },
   {
      id: 'p2',
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
         lat: 40.7484405,
         lng: -73.9878584
      },
      creator: 'u2'
   }
];

export const findPlaceById: RequestHandler = (req, res, next) => {
   const palceId = req.params.placeId;
   const place = DUMMY_PLACES.find((place) => place.id === palceId);
   if (!place) {
      throw next(new HttpError("No such place buddy", 404))
   }
   res.status(200).json({ place });
}

export const findPlacesByUserId: RequestHandler = (req, res, next) => {
   const userId = req.params.userId;
   const places = DUMMY_PLACES.filter((place) => place.creator === userId);
   if (!places || places.length === 0) {
      throw next(new HttpError("No such user buddy", 404))
   }
   res.status(200).json({ places });
}

export const createPlace: RequestHandler = (req, res, next) => {
   const { title, description, coordinates, address, creator } = req.body;

   const place = {
      title,
      description,
      coordinates,
      address,
      creator
   };

   res.status(201).json({ place });
}

export const updatePlace: RequestHandler = (req, res, next) => {
   const { title, description } = req.body;
   const palceId = req.params.placeId;

   const place = { title, description }

   res.status(201).json({ place });
}

export const deletePlace: RequestHandler = (req, res, next) => {
   const palceId = req.params.placeId;

   const place = { id: "yolo" }

   res.status(201).json({ place });
}