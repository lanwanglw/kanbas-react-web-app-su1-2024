import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as courseClient from "../Courses/client";
import { Course } from "../../types";

export default function Dashboard(
    {  courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: Course[]; course: Course; setCourse: (course: Course) => void;
        addNewCourse: () => void; deleteCourse: (courseId: string) => void;
        updateCourse: () => void; })
{
    const [allCourses, setAllCourses] = useState<Course[]>(courses);

    useEffect(() => {
        const fetchCourses = async () => {
            const fetchedCourses = await courseClient.fetchAllCourses();
            setAllCourses(fetchedCourses);
        };
        fetchCourses();
    }, []);

    const handleAddCourse = async () => {
        const newCourse = await courseClient.createCourse(course);
        setAllCourses([...allCourses, newCourse]);
        addNewCourse();
    };

    const handleUpdateCourse = async () => {
        const updatedCourse = await courseClient.updateCourse(course);
        setAllCourses(allCourses.map(c => c._id === updatedCourse._id ? updatedCourse : c));
        updateCourse();
    };

    const handleDeleteCourse = async (courseId: string) => {
        await courseClient.deleteCourse(courseId);
        setAllCourses(allCourses.filter(c => c._id !== courseId));
        deleteCourse(courseId);
    };

    return (
        <div className="p-4" id="wd-dashboard" style={{paddingLeft: "40px"}}>
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr/>
            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={handleAddCourse}>
                    Add
                </button>
                <button className="btn btn-warning float-end me-2"
                        onClick={handleUpdateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5>
            <br/>
            <input value={course.name} className="form-control mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            <textarea value={course.description} className="form-control"
                      onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
            <hr/>
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr/>
            <div id="wd-dashboard-courses" className="row" style={{marginTop: "30px", marginBottom: "30px"}}>
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{width: "300px", marginBottom: "30px"}}
                             key={course._id}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none">
                                <div className="card rounded-3 overflow-hidden h-100"
                                     style={{width: "280px", marginBottom: "30px"}}>
                                    <img src={course.image} className="course-image" height="160" alt={course.name}/>
                                    <div className="card-body d-flex flex-column">
                                        <span className="wd-dashboard-course-link"
                                              style={{
                                                  textDecoration: "none",
                                                  color: "navy",
                                                  fontWeight: "bold"
                                              }}>
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text"
                                           style={{maxHeight: 53, overflow: "hidden"}}>
                                            {course.description}
                                        </p>
                                        <div className="d-flex justify-content-between mt-auto">
                                            <Link to={`/Kanbas/Courses/${course._id}/Home`}
                                                  className="btn btn-primary">Go</Link>
                                            <button id="wd-edit-course-click"
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                    className="btn btn-warning me-2 float-end">
                                                Edit
                                            </button>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                handleDeleteCourse(course._id);
                                            }} className="btn btn-danger" id="wd-delete-course-click">
                                                Delete
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}