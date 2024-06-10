import React, {useState, useEffect, useCallback} from 'react';
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from './client';

export interface Lesson {
    _id: string;
    name: string;
    description: string;
    module: string;
}

export interface Module {
    editing: boolean;
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
}

export default function Modules() {
    const { cid } = useParams<{ cid: string }>();
    const modules = useSelector((state: any) => state.modulesReducer.modules);
    const dispatch = useDispatch();
    const [moduleName, setModuleName] = useState("");

    const fetchModules = useCallback(async () => {
        if (cid) {
            const modules = await client.findModulesForCourse(cid);
            dispatch(setModules(modules));
        }
    }, [cid, dispatch])

    useEffect(() => {
        fetchModules();
    }, [fetchModules]);

    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
    };

    const handleAddModule = async () => {
        if (cid) {
            await createModule({ name: moduleName, course: cid });
            setModuleName("");
        }
    };

    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    return (
        <div id="wd-modules">
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={handleAddModule}
            />
            <br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {modules
                    .filter((module: Module) => module.course === cid)
                    .map((module: Module) => (
                        <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {!module.editing && module.name}
                                    { module.editing && (
                                        <input className="form-control w-50 d-inline-block"
                                               onChange={(e) =>
                                                   saveModule({ ...module, name: e.target.value }) }
                                               onKeyDown={(e) => {
                                                   if (e.key === "Enter") {
                                                       saveModule({ ...module, editing: false });
                                                   }
                                               }}
                                               value={module.name}
                                        />
                                    )}
                                    <ModuleControlButtons
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => {
                                            removeModule(moduleId);
                                        }}
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
