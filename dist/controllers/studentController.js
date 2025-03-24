"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.renderEditStudent = exports.addStudent = exports.renderAddStudent = exports.renderHome = void 0;
const studentService = __importStar(require("../services/studentService"));
const renderHome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const students = yield studentService.getAllStudents();
    res.render("index", { students });
});
exports.renderHome = renderHome;
const renderAddStudent = (req, res) => {
    res.render("addStudent");
};
exports.renderAddStudent = renderAddStudent;
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield studentService.addStudent(req.body);
    res.redirect("/");
});
exports.addStudent = addStudent;
const renderEditStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //   const student = await studentService.getAllStudents();
    const student = yield studentService.getStudentById(req.params.id);
    res.render("editStudent", { student });
});
exports.renderEditStudent = renderEditStudent;
const updateStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield studentService.updateStudent(req.params.id, req.body);
    res.redirect("/");
});
exports.updateStudent = updateStudent;
const deleteStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield studentService.deleteStudent(req.params.id);
    res.redirect("/");
});
exports.deleteStudent = deleteStudent;
