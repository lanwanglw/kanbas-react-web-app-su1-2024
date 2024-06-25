import React, { useState, useEffect } from 'react';
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as moduleClient from './client';

export interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

export interface Module {
    editing: any;
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}

export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const [modules, setModules] = useState<Module[]>([]);
    const reduxModules = useSelector((state: any) => state.modulesReducer.modules);
    const dispatch = useDispatch();
    const [moduleName, setModuleName] = useState("");

    useEffect(() => {
        const fetchModules = async () => {
            try {
                if (cid) {
                    const fetchedModules = await moduleClient.fetchModulesByCourse(cid);
                    setModules(fetchedModules);
                }
            } catch (error) {
                console.error("Failed to fetch modules:", error);
            }
        };
        fetchModules();
    }, [cid]);

    const handleAddModule = async () => {
        try {
            if (cid) {
                const newModule = await moduleClient.createModule(cid, { name: moduleName, course: cid });
                dispatch(addModule(newModule));
                setModuleName("");
            }
        } catch (error) {
            console.error("Failed to add module:", error);
        }
    };

    const handleUpdateModule = async (module: Module) => {
        try {
            const updatedModule = await moduleClient.updateModule(module._id, module);
            dispatch(updateModule(updatedModule));
        } catch (error) {
            console.error("Failed to update module:", error);
        }
    };

    const handleDeleteModule = async (moduleId: string) => {
        try {
            await moduleClient.deleteModule(moduleId);
            dispatch(deleteModule(moduleId));
        } catch (error) {
            console.error("Failed to delete module:", error);
        }
    };

    return (
        <div id="wd-modules">
            <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={handleAddModule} />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {reduxModules
                    .filter((module: Module) => module.course === cid)
                    .map((module: Module) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {!module.editing && module.name}
                                    {module.editing && (
                                        <input
                                            className="form-control w-50 d-inline-block"
                                            onChange={(e) =>
                                                dispatch(updateModule({ ...module, name: e.target.value }))
                                            }
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleUpdateModule({ ...module, editing: false });
                                                }
                                            }}
                                            value={module.name}
                                        />
                                    )}
                                    <ModuleControlButtons
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => handleDeleteModule(moduleId)}
                                        editModule={(moduleId) => dispatch(editModule(moduleId))}
                                    />
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