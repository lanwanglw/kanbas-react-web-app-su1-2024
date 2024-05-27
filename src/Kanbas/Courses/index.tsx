import React from 'react';
import KanbasNavigation from "../Navigation";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Grades from './Grades';
import { courses } from "../Database";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses() {
    const { cid = '' } = useParams<{ cid: string }>();
    const course = courses?.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

    const breadcrumb = () => {
        const pathParts = pathname.split("/").slice(3);
        return pathParts.map((part, index) => (
            <span key={index}>
                &gt; {part.charAt(0).toUpperCase() + part.slice(1)}
            </span>
        ));
    };

    return (
        <div id="wd-kanbas" className="text-danger h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black">
                    <KanbasNavigation />
                </div>
                <div id="wd-courses" className="flex-fill p-4">
                    <h2 className="text-danger">
                        <FaAlignJustify className="me-4 fs-4 mb-1" />
                        {course && course.name} {breadcrumb()}
                    </h2>
                    <hr />
                    <div className="d-flex h-100">
                        <div className="d-none d-md-block bg-black">
                            <CoursesNavigation links={links} cid={cid} />
                        </div>
                        <div className="flex-fill p-4">
                            <Routes>
                                <Route path="/" element={<Navigate to={`/${cid}/Home`} />} />
                                <Route path=":cid/Home" element={<Home />} />
                                <Route path=":cid/Modules" element={<Modules />} />
                                <Route path=":cid/Assignments" element={<Assignments />} />
                                <Route path=":cid/Assignments/:id" element={<AssignmentEditor />} />
                                <Route path=":cid/Grades" element={<Grades />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
