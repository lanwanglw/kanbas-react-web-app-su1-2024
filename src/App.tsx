import React from 'react';
import Labs from "./Labs";
import Kanbas from "./Kanbas";
import Courses from './Kanbas/Courses';
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import './index.css';

export default function App() {
  return (
      <HashRouter>
          <div className="d-flex">
              <div className="flex-fill">
                  <Routes>
                      <Route path="/" element={<Navigate to="Labs" />} />
                      <Route path="/Labs/*" element={<Labs />} />
                      <Route path="/Kanbas/*" element={<Kanbas />} />
                      <Route path="/Kanbas/Courses/:cid/*" element={<Courses />} />
                  </Routes>
              </div>
          </div>
      </HashRouter>
  );
}
