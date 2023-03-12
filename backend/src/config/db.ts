import { connect } from "mongoose";


export const ConnectDB = () => {
   try {
      connect(process.env.URI!);
      console.log("Connected to DB")
   }
   catch (err) {
      throw err
   }
};