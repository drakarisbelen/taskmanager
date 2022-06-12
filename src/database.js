import { connect } from "mongoose";
import { MONGODB_URI } from "./config";

//console.log(process.env.MOONDB_URI)
(async () => {
  try {
    //const db = await connect("mongodb://localhost/crud-mongo");
    const db = await connect(MONGODB_URI);
    console.log("DB Coneccected to: ", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
