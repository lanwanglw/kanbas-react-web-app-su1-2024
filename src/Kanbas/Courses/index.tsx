import React, { useState, useEffect } from "react";
import KanbasNavigation from "../Navigation";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Routes, Route, useParams, useLocation, Navigate } from "react-router";
import Grades from './Grades';
import { FaAlignJustify } from "react-icons/fa6";
import PeopleTable from "./People/Table";
import PeopleDetails from "./People/Details";
import * as peopleClient from "./People/client";
import Quizzes from "./Quizzes";
import QuizEditor from "./Quizzes/QuizEditor";
import QuizPreview from "./Quizzes/QuizPreview";
import { Course } from "../../types";

interface CoursesProps {
    courses: Course[];
}

export default function Courses({ courses }: CoursesProps) {
    const { pathname } = useLocation();
    const { cid } = useParams<{ cid: string }>();
    const [users, setUsers] = useState<any[]>([]);
    const course = courses.find((course) => course._id === cid);
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    const fetchUsers = async () => {
        const users = await peopleClient.findAllUsers();
        setUsers(users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div id="wd-kanbas" className="h-100">
            <div className="d-flex h-100">
                <div className="d-none d-md-block bg-black" style={{ width: '110px' }}>
                    <KanbasNavigation />
                </div>
                <div id="wd-courses" className="flex-fill p-4">
                    <h2 className="text-danger">
                        <FaAlignJustify className="me-4 fs-4 mb-1" />
                        {course && course.name} &gt; {pathname.split("/")[4]}
                    </h2>
                    <div className="d-flex h-100">
                        <div className="d-none d-md-block bg-black" style={{ width: '110px' }}>
                            <CoursesNavigation links={links} cid={cid || ""} />
                        </div>
                        <div className="flex-fill p-4">
                            <Routes>
                                <Route path="/" element={<Navigate to="Home" />} />
                                <Route path="Home" element={<Home />} />
                                <Route path="Modules" element={<Modules />} />
                                <Route path="Piazza" element={<h1>Piazza</h1>} />
                                <Route path="Zoom" element={<h1>Zoom</h1>} />
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:id/*" element={<AssignmentEditor />} />
                                <Route path="Grades" element={<Grades />} />
                                <Route path="People" element={<PeopleTable />} />
                                <Route path="People/:uid" element={<PeopleDetails fetchUsers={fetchUsers}/>} />
                                <Route path="Quizzes" element={<Quizzes />} />
                                <Route path="Quizzes/:quizId" element={<QuizEditor />} />
                                <Route path="Quizzes/:quizId/*" element={<QuizPreview />} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}