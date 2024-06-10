import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { MdSearch, MdCheckCircle, MdDragIndicator, MdMoreVert, MdAdd, MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { VscNotebook } from "react-icons/vsc";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../types";
import { assignments as initialAssignments } from "../../Database";
import { setAssignments, deleteAssignment } from "./reducer";
import * as client from "./client";

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchAssignments = useCallback(async () => {
        const assignments = await client.findAssignmentsForCourse(cid);
        dispatch(setAssignments(assignments));
    }, [cid, dispatch]);

    useEffect(() => {
        const fetchData = async () => {
            await fetchAssignments();
        };
        fetchData().catch(console.error);
    }, [fetchAssignments]);

    const assignments = useSelector((state: AppState) => state.assignmentsReducer?.assignments || initialAssignments);

    const courseAssignments = assignments.filter((assignment: { course: string }) => assignment.course === cid);

    const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(null);

    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
    };

    const removeAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(cid, assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };

    const handleDeleteAssignment = (id: string) => {
        setAssignmentToDelete(id);
    };

    const confirmDeleteAssignment = async () => {
        if (assignmentToDelete) {
            try {
                await removeAssignment(assignmentToDelete);
            } catch (error) {
                console.error("Error confirming deletion:", error);
            } finally {
                setAssignmentToDelete(null);
            }
        }
    };

    const cancelDeleteAssignment = () => {
        setAssignmentToDelete(null);
    };

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
                    <button className="btn btn-danger d-flex align-items-center" id="wd-add-assignment" onClick={handleAddAssignment}>
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
                {courseAssignments.map((assignment: { _id: string, title: string, points: number, due_date: string, available_date: string }) => (
                    <li key={assignment._id} className="list-group-item d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
                        <div className="d-flex align-items-center">
                            <MdDragIndicator className="me-2" />
                            <VscNotebook className="me-2 text-success" />
                            <div>
                                <Link className="wd-assignment-link text-decoration-none fw-bold text-black" to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <div className="small">
                                    <span className="text-danger">Multiple Modules</span>
                                    <span className="text-muted"> | <strong>Not available until</strong> {assignment.available_date}</span>
                                </div>
                                <div className="small"><strong>Due</strong> {assignment.due_date} | {assignment.points} pts</div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <MdCheckCircle className="text-success"/>
                            <button className="btn btn-danger btn-sm ms-2" onClick={() => handleDeleteAssignment(assignment._id)}>
                                <MdDelete/>
                            </button>
                            <MdMoreVert className="ms-2"/>
                        </div>
                    </li>
                ))}
            </ul>

            {assignmentToDelete && (
                <div className="modal fade show" style={{ display: "block" }} role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Confirm Delete</h5>
                                <button type="button" className="btn-close" onClick={cancelDeleteAssignment}></button>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure you want to delete this assignment?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={cancelDeleteAssignment}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={confirmDeleteAssignment}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
