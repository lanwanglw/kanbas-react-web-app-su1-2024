import React from 'react';
import KanbasNavigation from "../Navigation";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Routes, Route, useParams, useLocation } from "react-router";
import Grades from './Grades';
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses() {
    const { pathname } = useLocation();
    const { cid} = useParams<{ cid: string }>();
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

    return (
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black">
                    <KanbasNavigation />
                </div>
                <div id="wd-courses" className="flex-fill p-4">
                    <h2 className="text-danger">
                        <FaAlignJustify className="me-4 fs-4 mb-1" />
                        {course && course.name} &gt; {pathname.split("/")[4]}
                    </h2>
                    <div className="d-flex h-100">
                        <div className="d-none d-md-block bg-black">
                            <CoursesNavigation links={links} cid={cid || ""} />
                        </div>
                        <div className="flex-fill p-4">
                            <Routes>
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Piazza" element={<h1>Piazza</h1>} />
                                <Route path="Zoom" element={<h1>Zoom</h1>} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:id" element={<AssignmentEditor />} />
                                <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                                <Route path="Grades" element={<Grades />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
