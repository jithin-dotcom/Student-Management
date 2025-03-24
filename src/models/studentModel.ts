import mongoose, { Schema, Document } from "mongoose";
import { IStudent } from "../interfaces/student";

interface IStudentModel extends IStudent, Document {}

const studentSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
});

export default mongoose.model<IStudentModel>("Student", studentSchema);
