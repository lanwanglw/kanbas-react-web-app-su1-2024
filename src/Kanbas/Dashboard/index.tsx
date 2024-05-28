import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import * as db from "../Database";

// Define a type for the course object
interface Course {
    _id: string;
    name: string;
    description: string;
    image: string;
}

export default function Dashboard() {

    const [courses, setCourses] = useState<Course[]>(db.courses);

    // Function to create a new course
    const createCourse = (newCourse: Course) => {
        setCourses([...courses, newCourse]);
    };

    // Function to update an existing course
    const updateCourse = (updatedCourse: Course) => {
        setCourses(courses.map(course =>
            course._id === updatedCourse._id ? updatedCourse : course
        ));
    };

    // Function to delete a course
    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter(course => course._id !== courseId));
    };

    return (
        <div className="p-4" id="wd-dashboard" style={{paddingLeft: "40px"}}>
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />
            <div id="wd-dashboard-courses" className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="col" style={{ width: "300px", marginBottom: "30px"}}
                            key={course._id}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden h-100" style={{width: "280px", marginBottom: "30px"}}>
                                    <img src={course.image} className="course-image" height="{160}" alt={course.name}/>
                                    <div className="card-body d-flex flex-column">
                                        <span className="wd-dashboard-course-link"
                                            style={{
                                                textDecoration: "none",
                                                color: "navy",
                                                fontWeight: "bold" }} >
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text"
                                           style={{ maxHeight: 53, overflow: "hidden" }}
                                        >
                                            {course.description}
                                        </p>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">Go</Link>
                                    </div>
                                </div>
                            </Link>
                            <button onClick={() => deleteCourse(course._id)} className="btn btn-secondary mt-2">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}