import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Courses() {
    return (
        <div id="wd-courses">
            <h2>Course 1234</h2>
            <hr/>
            <table>
                <tbody>
                    <tr>
                        <td valign="top">
                            <CoursesNavigation/>
                        </td>
                        <td valign="top">
                            <Routes>
                                <Route path="/" element={<Navigate to="Home"/>}/>
                                <Route path="Home" element={<Home />}/>
                                <Route path="Modules" element={<Modules/>}/>
                                <Route path="Assignments" element={<Assignments />} />
                                <Route path="Assignments/:id" element={<AssignmentEditor />}/>
                            </Routes>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}