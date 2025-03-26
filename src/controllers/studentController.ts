import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export const renderHome = async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.render("index", { students });
};

export const renderAddStudent = (req: Request, res: Response) => {
  res.render("addStudent",{error:null});
};

export const addStudent = async (req: Request, res: Response) => {
  const result = await studentService.addStudent(req.body);
  if(!result){
    return res.render("addStudent",{error:"student name already exists"});
  }
  res.redirect("/");
};

export const renderEditStudent = async (req: Request, res: Response) => {
  const student = await studentService.getStudentById(req.params.id);
  res.render("editStudent", { student, error:null});
};

export const updateStudent = async (req: Request, res: Response) => {
  const result = await studentService.updateStudent(req.params.id, req.body);
  const student = await studentService.getStudentById(req.params.id);
  if(!result){
    return res.render("editStudent",{ student, error:"student name already exists"});
  }
  res.redirect("/");
};

export const deleteStudent = async (req: Request, res: Response) => {
  await studentService.deleteStudent(req.params.id);
  res.redirect("/");
};
