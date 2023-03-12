import { Schema, model } from "mongoose";

const placesSchema = new Schema({
   title: {
      type: String,
      require: true
   },
   description: {
      type: String,
      require: true
   },
   image: {
      type: String,
      require: true
   },
   address: {
      type: String,
      required: true
   },
   location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true }
   },
   creator: { type: String, required: true }
});

export default model("Place", placesSchema);