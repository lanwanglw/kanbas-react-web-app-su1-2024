import React from 'react';
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div id="wd-modules">
            <ModulesControls /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {/* Module 1 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Introduction to the course
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Learn what is Web Development
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Full Stack Developer - Chapter 1 - Introduction
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                                <li className="wd-content-item">Commit your source to GitHub.com</li>
                                <li className="wd-content-item">Deploying to Netlify</li>
                                <li className="wd-content-item">Deploying multiple branches in Netlify</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Module 2 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 1, Lecture 2 - Formatting User Interfaces with HTML
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            LEARNING OBJECTIVES
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Learn how to create user interfaces with HTML
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            Deploy the assignment to Netlify
                            <LessonControlButtons />
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            SLIDES
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings and Paragraphs</li>
                                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                                <li className="wd-content-item">Creating Web Forms</li>
                                <li className="wd-content-item">Navigating with Anchors</li>
                                <li className="wd-content-item">Embedding content with Iframes</li>
                                <li className="wd-content-item">Drawing with Scalable Vector Graphics</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                {/* Module 3 */}
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Week 2, Lecture 3 - Styling User Interfaces with CSS
                        <ModuleControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            LEARNING OBJECTIVES
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            Introduction to CSS
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            Selectors by tag ID, classes, and document structure
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            Styling color and background color
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            Styling dimensions and positions
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            The box model - styling margins, borders, and paddings
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            LESSON 1 - Full Stack Developer - Chapter 3 - Styling User Interfaces With Cascading Style Sheets
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            LESSON 2
                            <LessonControlButtons/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
