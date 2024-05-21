import React from 'react';
import { Table, Form, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { FaFileImport, FaFileExport, FaCog, FaSearch, FaChevronDown, FaFilter } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Grades() {
    return (
        <div className="container-fluid">
            <div className="col d-flex justify-content-end align-items-center">
                <Button variant="secondary" className="me-2">
                    <FaFileImport className="me-2"/> Import
                </Button>
                <DropdownButton id="dropdown-basic-button" title={<><FaFileExport className="me-2"/> Export</>}
                                variant="secondary" className="me-2">
                    <Dropdown.Item href="#">Export Option 1</Dropdown.Item>
                    <Dropdown.Item href="#">Export Option 2</Dropdown.Item>
                </DropdownButton>
                <Button variant="secondary">
                    <FaCog/>
                </Button>
            </div>
            <div className="row my-3">
                <div className="col-md-6">
                    <h5 className="fw-bold">Student Names</h5>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch/></span>
                        <Form.Control type="text" placeholder="Search Students" className="form-control"/>
                        <span className="input-group-text"><FaChevronDown/></span>
                    </div>
                </div>
                <div className="col-md-6">
                    <h5 className="fw-bold">Assignment Names</h5>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch/></span>
                        <Form.Control type="text" placeholder="Search Assignments" className="form-control"/>
                        <span className="input-group-text"><FaChevronDown/></span>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <Button variant="secondary">
                        <FaFilter className="me-2"/> Apply Filters
                    </Button>
                </div>

            </div>
            <div className="table-responsive">
                <Table striped bordered hover className="table">
                    <thead>
                    <tr>
                        <th className="text-center">Student Name</th>
                        <th className="text-center">A1 SETUP<br/><small>Out of 100</small></th>
                        <th className="text-center">A2 HTML<br/><small>Out of 100</small></th>
                        <th className="text-center">A3 CSS<br/><small>Out of 100</small></th>
                        <th className="text-center">A4 BOOTSTRAP<br/><small>Out of 100</small></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-danger text-center">Jane Adams</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">96.67%</td>
                        <td className="text-center">92.18%</td>
                        <td className="text-center">66.22%</td>
                    </tr>
                    <tr>
                        <td className="text-danger text-center">Christina Allen</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger text-center">Samreen Ansari</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger text-center">Han Bao</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">
                            <Form.Control type="text" defaultValue="88.03" className="form-control text-center"/>
                        </td>
                        <td className="text-center">98.99%</td>
                    </tr>
                    <tr>
                        <td className="text-danger text-center">Mahi Sai Srinivas Bobbili</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">96.67%</td>
                        <td className="text-center">98.37%</td>
                        <td className="text-center">100%</td>
                    </tr>
                    <tr>
                        <td className="text-danger text-center">Siran Cao</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                        <td className="text-center">100%</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
