import React from 'react';
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import GreenCheckmark from "./GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import { modules } from "../../Database";


export interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

export interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}


export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const courseModules = modules.filter((module: Module) => module.course === cid);

    return (
        <div id="wd-modules">
            <ModulesControls /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {courseModules.map((module: Module) => (
                    <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <BsGripVertical className="me-2 fs-3" />
                                {module.name}
                                <ModuleControlButtons />
                            </div>
                            <div className="d-flex align-items-center">
                                <GreenCheckmark />
                                <button className="btn btn-secondary btn-sm me-2">
                                    <FiPlus className="fs-6" />
                                </button>
                                <IoEllipsisVertical className="fs-4" />
                            </div>
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: Lesson) => (
                                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name}
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
