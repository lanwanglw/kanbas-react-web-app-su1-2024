import React from 'react';
import { Table, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaChevronDown, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router';
import { enrollments, users, assignments, grades } from '../../Database';

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

interface Enrollment {
    _id: string;
    user: string;
    course: string;
}

interface Assignment {
    _id: string;
    title: string;
    course: string;
    points: number;
}

interface Grade {
    _id: string;
    student: string;
    assignment: string;
    grade: string;
}

export default function Grades() {
    const { cid } = useParams<{ cid: string }>();

    const enrolledStudents: User[] = enrollments
        .filter((enrollment: Enrollment) => enrollment.course === cid)
        .map((enrollment: Enrollment) => {
            return users.find((user: User) => user._id === enrollment.user);
        })
        .filter((student): student is User => student !== undefined);

    const courseAssignments = assignments.filter((assignment: Assignment) => assignment.course === cid);

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
                        {courseAssignments.map((assignment: Assignment) => (
                            <th key={assignment._id} className="text-center">
                                {assignment.title}<br /><small>Out of {assignment.points}</small>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {enrolledStudents.map((student: User) => (
                        <tr key={student._id}>
                            <td className="text-center text-danger">
                                {student.firstName} {student.lastName}
                            </td>
                            {courseAssignments.map((assignment: Assignment) => {
                                const grade = grades.find((g: Grade) => g.assignment === assignment._id && g.student === student._id);
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