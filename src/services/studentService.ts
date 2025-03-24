import StudentModel from "../models/studentModel";
import { IStudent } from "../interfaces/student";

export const addStudent = async (student: IStudent): Promise<IStudent> => {
  return await StudentModel.create(student);
};

export const getAllStudents = async (): Promise<IStudent[]> => {
  return await StudentModel.find();
};

//error
export const getStudentById = async (id: string): Promise<IStudent | null> => {
    return await StudentModel.findById(id);
  };

export const updateStudent = async ( id: string, student: IStudent): Promise<IStudent | null> => {
  return await StudentModel.findByIdAndUpdate(id, student, { new: true });
};

export const deleteStudent = async (id: string): Promise<IStudent | null> => {
  return await StudentModel.findByIdAndDelete(id);
};
