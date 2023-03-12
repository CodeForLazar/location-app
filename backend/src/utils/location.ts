import axios from "axios";
import HttpError from "./HttpError";


export const getCoordsFromAdress = async (address: string) => {

   const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.API_KEY}`);

   const { data } = res;

   if (!data || data.status === "ZERP_RESULTS") {
      throw new HttpError("Could not find location for this address", 422);
   }

   const coordinates = data.results[0].geometry.location;

   return coordinates;
};