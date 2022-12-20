import mongoose from "mongoose";
import { config } from "../../config/index.js";

const init = async () => {
  try {
    mongoose.connect(config.DATABASES.mongo.url, {
      dbName: config.DATABASES.mongo.dbName,
    });
    console.log("Conexión con mongodb establecida");
  } catch (error) {
    console.log(error);
  }
};

export const MongoDBService = {
  init,
};
