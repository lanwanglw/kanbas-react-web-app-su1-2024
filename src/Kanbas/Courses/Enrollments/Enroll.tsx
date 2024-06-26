import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface Course {
    _id: string;
    name: string;
    description?: string;
    image?: string;
    createdBy?: string;
    students?: string[];
}

export default function Enroll() {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const currentUser = useSelector((state: any) => state.user.currentUser);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get("/api/courses");
                setCourses(response.data);
            } catch (err) {
                setError("Error fetching courses");
            }
        };
        fetchCourses();
    }, []);

    const enroll = async (courseId: string) => {
        try {
            await axios.post(`/api/courses/${courseId}/enroll`, { userId: currentUser._id });
            navigate("/Kanbas/Dashboard");
        } catch (err) {
            setError("Error enrolling in course");
        }
    };

    if (currentUser.role !== 'Student') {
        return <div>You do not have access to enroll in courses.</div>;
    }

    return (
        <div>
            <h1>Enroll in a Course</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <ul>
                {courses.map((course) => (
                    <li key={course._id}>
                        <span>{course.name}</span>
                        <button onClick={() => enroll(course._id)}>Enroll</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}