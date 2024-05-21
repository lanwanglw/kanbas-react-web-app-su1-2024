import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

export default function CoursesNavigation() {
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            <Link id="wd-course-home-link" to="Home" className="list-group-item active border border-0"> Home </Link>
            <Link id="wd-course-modules-link" to="Modules" className="list-group-item text-danger border border-0"> Modules </Link>
            <Link id="wd-course-piazza-link" to="Piazza" className="list-group-item text-danger border border-0"> Piazza </Link>
            <Link id="wd-course-zoom-link" to="Zoom" className="list-group-item text-danger border border-0"> Zoom </Link>
            <Link id="wd-course-assignments-link" to="Assignments" className="list-group-item text-danger border border-0"> Assignments </Link>
            <Link id="wd-course-quizzes-link" to="Quizzes" className="list-group-item text-danger border border-0"> Quizzes </Link>
            <Link id="wd-course-grades-link" to="Grades" className="list-group-item text-danger border border-0"> Grades </Link>
        </div>
    );
}
