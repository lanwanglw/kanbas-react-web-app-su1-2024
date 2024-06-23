import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from './Courses';
import "./styles.css";
import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import ProtectedRoute from "./ProtectedRoute";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>(db.courses);
    const [course, setCourse] = useState<any>({
        _id: "1234", name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
        image: "/images/reactjs.jpg", description: "New Description"
    });
    const addNewCourse = () => {
        setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
    };
    const deleteCourse = (courseId: any) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = () => {
        setCourses(
            courses.map((c: any) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    return (
        <Provider store={store}>
            <div id="wd-kanbas" className="h-100">
                <div className="d-flex h-100">
                    <div className="d-none d-md-block bg-black">
                        <KanbasNavigation />
                    </div>
                    <div className="flex-fill p-4">
                        <Routes>
                            <Route path="/" element={<Navigate to="Dashboard" />} key="dashboard" />
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="Dashboard" element={
                                <ProtectedRoute><Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}/></ProtectedRoute>} key="main-dashboard" />
                            <Route path="/Kanbas/Courses/:cid/*" element={<ProtectedRoute>
                                <Courses courses={courses}/></ProtectedRoute>} key="course-routes" />
                            <Route path="Calendar" element={<h1>Calendar</h1>} key="calendar" />
                            <Route path="Inbox" element={<h1>Inbox</h1>} key="inbox" />
                        </Routes>
                    </div>
                </div>
            </div>
        </Provider>
    );
}