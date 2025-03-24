"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudentById = exports.getAllStudents = exports.addStudent = void 0;
const studentModel_1 = __importDefault(require("../models/studentModel"));
const addStudent = (student) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.default.create(student);
});
exports.addStudent = addStudent;
const getAllStudents = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.default.find();
});
exports.getAllStudents = getAllStudents;
//error
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.default.findById(id);
});
exports.getStudentById = getStudentById;
const updateStudent = (id, student) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.default.findByIdAndUpdate(id, student, { new: true });
});
exports.updateStudent = updateStudent;
const deleteStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentModel_1.default.findByIdAndDelete(id);
});
exports.deleteStudent = deleteStudent;
