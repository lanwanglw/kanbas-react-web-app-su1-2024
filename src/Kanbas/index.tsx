import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from './Courses';
import "./styles.css";

export default function Kanbas() {
    return (
        <div id="wd-kanbas" className="h-100 d-flex">
            <div className="kanbas-sidebar">
                <KanbasNavigation />
            </div>
            <div className="flex-fill">
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:id/*" element={<Courses />} />
                </Routes>
            </div>
        </div>
    );
}