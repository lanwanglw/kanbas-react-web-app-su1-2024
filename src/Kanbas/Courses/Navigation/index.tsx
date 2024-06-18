import React from 'react';
import { useLocation, useParams } from 'react-router';
import "./index.css";
import { courses } from "../../Database";

interface CoursesNavigationProps {
    links: string[];
    cid: string;
}

const CoursesNavigation: React.FC<CoursesNavigationProps> = ({ links}) => {
    const location = useLocation();
    const { cid } = useParams<{ cid: string }>();
    const currentPath = location.pathname.split("/").pop();

    return (
        <div id="wd-courses-navigation" className="list-group rounded-0">
            {links.map((link) => {
                const linkPath = `#/Kanbas/Courses/${cid}/${link}`;
                const isActive = currentPath === link;

                return (
                    <a
                        key={link}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        href={linkPath}
                        className={`list-group-item border border-0 ${isActive ? 'active' : 'text-danger'}`}
                    >
                        {link}
                    </a>
                );
            })}
        </div>
    );
};

export default CoursesNavigation;