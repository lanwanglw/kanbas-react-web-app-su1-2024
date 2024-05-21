import React from 'react';
import KanbasNavigation from "../Navigation";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Routes, Route, Navigate } from "react-router-dom";
import Grades from './Grades';

export default function Courses() {
    return (
        <div id="wd-courses" className="h-100 d-flex">
            <div className="kanbas-sidebar">
                <KanbasNavigation/>
            </div>
            <div className="courses-content flex-fill">
                <h2>Course 1234</h2>
                <hr/>
                <div className="d-flex">
                    <div className="d-none d-md-block">
                        <CoursesNavigation/>
                    </div>
                    <div className="flex-fill">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" element={<Home/>}/>
                            <Route path="Modules" element={<Modules/>}/>
                            <Route path="Assignments" element={<Assignments/>}/>
                            <Route path="Assignments/:id" element={<AssignmentEditor />} />
                            <Route path="Grades" element={<Grades/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}