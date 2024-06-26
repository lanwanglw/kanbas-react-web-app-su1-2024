import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Courses from './Kanbas/Courses';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './index.css';
import { courses } from "./Kanbas/Database";
import { Course } from './types';
import QuizEditor from "./Kanbas/Courses/Quizzes/QuizEditor";
import QuizPreview from "./Kanbas/Courses/Quizzes/QuizPreview";

export default function App() {
    return (
        <HashRouter>
            <div className="d-flex">
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Labs" />} />
                        <Route path="/Labs/*" element={<Labs />} />
                        <Route path="/Kanbas/*" element={<Kanbas />} />
                        <Route path="/Kanbas/Courses/:cid/*" element={<Courses courses={courses as Course[]} />} />
                        <Route path="/Kanbas/Courses/:cid/quizzes/:quizId" element={<QuizEditor />} />
                        <Route path="/Kanbas/Courses/:cid/quiz-preview" element={<QuizPreview />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}