import mongoose from "mongoose";

const connectionDB = async () => {
    const URI = "mongodb+srv://itsrusty:JavaScript2003@salfox.dahian3.mongodb.net/"
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB".blue);
  } catch (error) {
    throw new Error(error);
  }
};

export default connectionDB;