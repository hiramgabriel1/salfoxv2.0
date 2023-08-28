import mongoose from "mongoose";
import { MONGO_URI } from "./keys.js";

const connectionDB = async () => {
    
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[DATABASE]: connected to MONGO_DB".blue);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectionDB;