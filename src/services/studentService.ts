import StudentModel from "../models/studentModel";
import { IStudent } from "../interfaces/student";
import studentModel from "../models/studentModel";

export const addStudent = async (student: IStudent): Promise<IStudent|null> => {
  const nameExists =  await StudentModel.create(student);
  const isNameValid = /^[A-Za-z\s]+$/.test(student.name);
  const isGradeValid = /^[A-F][+-]?$/.test(student.grade);
  if(nameExists || !isGradeValid || !isNameValid){
    return null;
  }
  return await studentModel.create(student);
};

export const getAllStudents = async (): Promise<IStudent[]> => {
  return await StudentModel.find();
};

//error
export const getStudentById = async (id: string): Promise<IStudent | null> => {
    return await StudentModel.findById(id);
  };

export const updateStudent = async ( id: string, student: IStudent): Promise<IStudent | null> => {
  const nameExist = await studentModel.findOne({ name: { $regex: `^${student.name}$`, $options: "i" },_id: { $ne: id }, });
  const isNameValid = /^[A-Za-z\s]+$/.test(student.name);
  const isGradeValid = /^[A-F][+-]?$/.test(student.grade);
  if(nameExist || !isNameValid || !isGradeValid){
    return null;
  }
  return await StudentModel.findByIdAndUpdate(id, student, { new: true });
};

export const deleteStudent = async (id: string): Promise<IStudent | null> => {
  return await StudentModel.findByIdAndDelete(id);
};
