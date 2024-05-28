import React from 'react';
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";

export default function AssignmentEditor() {
    const { cid, id } = useParams<{ cid: string; id: string }>();
    const assignment = assignments.find(a => a._id === id);

    if (!assignment) {
        return <div>Assignment not found</div>;
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toISOString().slice(0, 16); // Format date to 'YYYY-MM-DDTHH:mm'
    };

    return (
        <div id="wd-assignments-editor" className="container mt-4">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                <input id="wd-name" className="form-control" value={assignment.title} readOnly/>
            </div>

            <div className="mb-3">
                <textarea
                    id="wd-description"
                    className="form-control"
                    rows={10}
                    readOnly
                    value={`The assignment is available online\n\nSubmit a link to the landing page of your Web application running on Netlify.\n\nThe landing page should include the following:\n• Your full name and section\n• Links to each of the lab assignments\n• Link to the Kanbas application\n• Links to all relevant source code repositories\n\nThe Kanbas application should include a link to navigate back to the landing page.`}
                ></textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-points" className="form-label"><strong>Points</strong></label>
                    <input id="wd-points" className="form-control" value={assignment.points} readOnly/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="wd-group" className="form-label"><strong>Assignment Group</strong></label>
                    <select id="wd-group" className="form-control">
                        <option value="assignments">ASSIGNMENTS</option>
                        <option value="quizzes">QUIZZES</option>
                        <option value="exams">EXAMS</option>
                        <option value="projects">PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="wd-display-grade-as" className="form-label"><strong>Display Grade As</strong></label>
                    <select id="wd-display-grade-as" className="form-control">
                        <option value="percentage">Percentage</option>
                        <option value="letter">Letter</option>
                        <option value="combination">Combination</option>
                    </select>
                </div>
            </div>

            <div className="submission-type-section mb-3 border p-3">
                <div className="col-md-6">
                    <label htmlFor="wd-submission-type" className="form-label"><strong>Submission Type</strong></label>
                    <select id="wd-submission-type" className="form-control">
                        <option value="online">Online</option>
                    </select>
                    <fieldset className="border p-3">
                        <legend className="w-auto px-2"><strong>Online Entry Options</strong></legend>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-text-entry"/>
                            <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked/>
                            <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-media-recordings"/>
                            <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-student-annotation"/>
                            <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="wd-file-upload"/>
                            <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                        </div>
                    </fieldset>
                </div>
            </div>

            <div className="assign-section mb-3">
                <label className="form-label"><strong>Assign</strong></label>
                <div className="border p-3">
                    <div className="mb-3">
                        <label htmlFor="wd-assign-to" className="form-label"><strong>Assign to</strong></label>
                        <input id="wd-assign-to" className="form-control" defaultValue="Everyone   X"/>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="wd-due-date" className="form-label"><strong>Due</strong></label>
                            <input id="wd-due-date" type="datetime-local" className="form-control"
                                   defaultValue={formatDate(assignment.due_date)}/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label htmlFor="wd-available-from" className="form-label"><strong>Available from</strong></label>
                            <input id="wd-available-from" type="datetime-local" className="form-control"
                                   defaultValue={formatDate(assignment.available_date)}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="wd-available-until" className="form-label"><strong>Until</strong></label>
                            <input id="wd-available-until" type="datetime-local" className="form-control"
                                   defaultValue="2024-05-20T23:59"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end">
                <Link to={`/courses/${cid}/assignments`} className="btn btn-secondary me-2" id="cancel">Cancel</Link>
                <Link to={`/courses/${cid}/assignments`} className="btn btn-danger" id="save">Save</Link>
            </div>
        </div>
    );
}
