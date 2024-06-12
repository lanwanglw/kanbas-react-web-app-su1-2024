import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addAssignment, updateAssignment as updateAssignmentRedux } from "./reducer";
import { Assignment, AppState } from "../../../types";
import * as client from "./client";

export default function AssignmentEditor() {
    const { cid = "" } = useParams<{ cid?: string }>();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state: AppState) => state.assignmentsReducer?.assignments);
    const assignmentToEdit = assignments.find((assignment: Assignment) => assignment._id === id);

    const [assignment, setAssignment] = useState<Assignment>({
        _id: '',
        title: 'New Assignment',
        description: 'New Assignment Description',
        points: 100,
        due_date: '',
        available_date: '',
        course: cid,
    });

    useEffect(() => {
        if (id !== 'new' && assignmentToEdit) {
            setAssignment(assignmentToEdit);
        }
    }, [id, assignmentToEdit]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setAssignment({
            ...assignment,
            [name]: value,
        });
    };

    const handleSave = async () => {
        if (!assignment.title || !assignment.description) {
            alert("Title and description are required.");
            return;
        }

        try {
            if (id === 'new') {
                const newAssignment = {
                    ...assignment,
                    _id: new Date().getTime().toString(),
                };
                const createdAssignment = await client.createAssignment(cid, newAssignment);
                dispatch(addAssignment(createdAssignment));
            } else {
                await client.updateAssignment(assignment);
                dispatch(updateAssignmentRedux(assignment));
            }
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
        } catch (error: any) {
            console.error("Error saving assignment:", error.response ? error.response.data : error.message);
            alert("There was an error saving the assignment. Please try again.");
        }
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                <input
                    id="wd-name"
                    className="form-control"
                    name="title"
                    value={assignment.title}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={10}
                    name="description"
                    value={assignment.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="wd-points" className="form-label"><strong>Points</strong></label>
                <input
                    id="wd-points"
                    className="form-control"
                    name="points"
                    value={assignment.points}
                    onChange={handleChange}
                    type="number"
                />
            </div>

            <div className="mb-3">
                <label className="form-label"><strong>Assign</strong></label>
                <div className="border p-3">
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                            <input
                                id="wd-due-date"
                                type="datetime-local"
                                className="form-control"
                                name="due_date"
                                value={assignment.due_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                            <input
                                id="wd-available-from"
                                type="datetime-local"
                                className="form-control"
                                name="available_date"
                                value={assignment.available_date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                            <input
                                id="wd-available-until"
                                type="datetime-local"
                                className="form-control"
                                name="available_date"
                                value={assignment.available_date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <button className="btn btn-secondary me-2" id="cancel"
                        onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}>
                    Cancel
                </button>
                <button className="btn btn-danger" id="save" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
}
