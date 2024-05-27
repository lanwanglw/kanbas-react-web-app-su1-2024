import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css";

interface CoursesNavigationProps {
    links: string[];
    cid: string;
}

export default function CoursesNavigation({ links, cid }: CoursesNavigationProps) {
    const location = useLocation();
    const currentPath = location.pathname.split("/").pop();

    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link, index) => (
                <Link
                    key={index}
                    id={`wd-course-${link.toLowerCase()}-link`}
                    to={`/${cid}/${link}`}
                    className={`list-group-item ${currentPath === link ? 'active' : 'text-danger'} border border-0`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}
