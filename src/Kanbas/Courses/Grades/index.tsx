import React from 'react';
import { Table, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaChevronDown, FaFilter } from 'react-icons/fa';
import { useParams } from 'react-router';
import { enrollments, users, assignments, grades } from '../../Database';
import 'bootstrap/dist/css/bootstrap.min.css';

interface User {
    _id: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    role: string;
}

export default function Grades() {
    const { courseId } = useParams<{ courseId: string }>();

    const enrolledStudents: User[] = enrollments
        .filter(enrollment => enrollment.course === courseId)
        .map(enrollment => users.find(user => user._id === enrollment.user) as User)
        .filter((student): student is User => student !== undefined);

    const courseAssignments = assignments.filter(assignment => assignment.course === courseId);

    return (
        <div className="container-fluid">
            <div className="col d-flex justify-content-end align-items-center">
                <Button variant="secondary" className="me-2">
                    <FaFileImport className="me-2" /> Import
                </Button>
                <DropdownButton id="dropdown-basic-button" title={<><FaFileExport className="me-2" /> Export</>}
                                variant="secondary" className="me-2">
                    <Dropdown.Item href="#">Export Option 1</Dropdown.Item>
                    <Dropdown.Item href="#">Export Option 2</Dropdown.Item>
                </DropdownButton>
                <Button variant="secondary">
                    <FaCog />
                </Button>
            </div>
            <div className="row my-3">
                <div className="col-md-6">
                    <h5 className="fw-bold">Student Names</h5>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <Form.Control type="text" placeholder="Search Students" className="form-control" />
                        <span className="input-group-text"><FaChevronDown /></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5 className="fw-bold">Assignment Names</h5>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /></span>
                        <Form.Control type="text" placeholder="Search Assignments" className="form-control" />
                        <span className="input-group-text"><FaChevronDown /></span>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button variant="secondary">
                        <FaFilter className="me-2" /> Apply Filters
                    </Button>
                </div>
            </div>
            <div className="table-responsive">
                <Table striped bordered hover className="table">
                    <thead>
                    <tr>
                        <th className="text-center">Student Name</th>
                        {courseAssignments.map((assignment) => (
                            <th key={assignment._id} className="text-center">
                                {assignment.title}<br /><small>Out of 100</small>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {enrolledStudents.map((student) => (
                        <tr key={student._id}>
                            <td className="text-center text-danger">
                                {student.firstName} {student.lastName}
                            </td>
                            {courseAssignments.map((assignment) => {
                                const grade = grades.find(g => g.assignment === assignment._id && g.student === student._id);
                                return (
                                    <td key={assignment._id} className="text-center">
                                        {grade ? `${grade.grade}%` : 'N/A'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
