import React from 'react';
import { Link } from "react-router-dom";
import { MdSearch, MdCheckCircle, MdDragIndicator, MdMoreVert, MdAdd } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { VscNotebook } from "react-icons/vsc";
import { useParams } from "react-router";
import { assignments } from "../../Database";

export default function Assignments() {
    const { courseId } = useParams<{ courseId: string }>();
    const courseAssignments = assignments.filter(assignment => assignment.course === courseId);

    return (
        <div id="wd-assignments" className="container mt-4">
            <div className="d-flex justify-content-between mb-3">
                <div className="input-group" style={{ width: "300px" }}>
                    <span className="input-group-text">
                        <MdSearch />
                    </span>
                    <input
                        id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search..."
                    />
                </div>
                <div className="d-flex">
                    <button className="btn btn-secondary me-2 d-flex align-items-center" id="wd-add-assignment-group">
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button className="btn btn-danger d-flex align-items-center" id="wd-add-assignment">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="d-flex align-items-center">
                    <MdDragIndicator className="me-2" />
                    <h3 id="wd-assignments-title" className="mb-0">
                        ASSIGNMENTS
                    </h3>
                </div>
                <div className="d-flex align-items-center">
                    <span className="badge bg-secondary me-2">40% of Total</span>
                    <button className="btn btn-outline-secondary d-flex align-items-center">
                        <MdAdd className="me-1" />
                    </button>
                    <MdMoreVert className="ms-2" />
                </div>
            </div>
            <ul id="wd-assignment-list" className="list-group">
                {courseAssignments.map((assignment) => (
                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
                        <div className="d-flex align-items-center">
                            <MdDragIndicator className="me-2" />
                            <VscNotebook className="me-2 text-success" />
                            <div>
                                <Link className="wd-assignment-link text-decoration-none fw-bold text-black" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <div className="small">
                                    <span className="text-danger">Multiple Modules</span>
                                    <span className="text-muted"> | <strong>Not available until</strong> May 6 at 12:00am</span>
                                </div>
                                <div className="small"><strong>Due</strong> May 13 at 11:59pm | 100 pts</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <MdCheckCircle className="text-success" />
                            <MdMoreVert className="ms-2" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
