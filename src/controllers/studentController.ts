import { Request, Response } from "express";
import * as studentService from "../services/studentService";

export const renderHome = async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.render("index", { students });
};

export const renderAddStudent = (req: Request, res: Response) => {
  res.render("addStudent");
};

export const addStudent = async (req: Request, res: Response) => {
  await studentService.addStudent(req.body);
  res.redirect("/");
};

export const renderEditStudent = async (req: Request, res: Response) => {
  const student = await studentService.getStudentById(req.params.id);
  res.render("editStudent", { student });
};

export const updateStudent = async (req: Request, res: Response) => {
  await studentService.updateStudent(req.params.id, req.body);
  res.redirect("/");
};

export const deleteStudent = async (req: Request, res: Response) => {
  await studentService.deleteStudent(req.params.id);
  res.redirect("/");
};
