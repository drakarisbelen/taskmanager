import { config } from "dotenv";

config();

export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test";

export const PORT = process.env.PORT || 3005;
console.log("VAR ENV -->", process.env.MONGODB_URI);
console.log("PORT ENV -->", process.env.PORT);
