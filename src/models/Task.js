import { Schema, model } from "mongoose";
//Schema son los campos
//model nombre de la tabla
//timestamps = true me crea los campos createdAt updatedAt
// trim:true quita los espacios de la cadena
//versionKey: false para que no salga el versionado __v
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//creo mi modelo de dato
export default model("Task", taskSchema);
