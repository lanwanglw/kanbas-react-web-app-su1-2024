import React from 'react';
import { NavLink } from "react-router-dom";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
        { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
        { label: "Labs", path: "/Labs", icon: LiaCogSolid },
    ];
    return (
        <div id="wd-kanbas-navigation" className="list-group rounded-0">
            <NavLink id="wd-account-link" target="_blank"
                     to="https://www.northeastern.edu/"
                     className="list-group-item bg-black border-0">
                <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
            </NavLink>
            <Link key="/Kanbas/Account" to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
                  ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
                      ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger"})}
                    <br />
                    {link.label}
                </Link>
            ))}

            <NavLink id="wd-account-link" to="/Kanbas/Account"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-white bg-black text-center border-0 active"
                             : "list-group-item text-white bg-black text-center border-0"}>
                <FaRegCircleUser className="fs-1 text-white" /><br />
                Account
            </NavLink>

            <NavLink id="wd-dashboard-link" to="/Kanbas/Dashboard"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-center border-0 bg-white text-danger active"
                             : "list-group-item text-center border-0 bg-black text-white"}>
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </NavLink>

            <NavLink id="wd-course-link" to="/Kanbas/Courses"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-center border-0 bg-white text-danger active"
                             : "list-group-item text-white bg-black text-center border-0"}>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </NavLink>

            <NavLink id="wd-calendar-link" to="/Kanbas/Calendar"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-center border-0 bg-white text-danger active"
                             : "list-group-item text-white bg-black text-center border-0"}>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </NavLink>

            <NavLink id="wd-inbox-link" to="/Kanbas/Inbox"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-center border-0 bg-white text-danger active"
                             : "list-group-item text-white bg-black text-center border-0"}>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </NavLink>

            <NavLink id="wd-labs-link" to="/Kanbas/Labs"
                     className={({ isActive }) =>
                         isActive ? "list-group-item text-center border-0 bg-white text-danger active"
                             : "list-group-item text-white bg-black text-center border-0"}>
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </NavLink>
        </div>
    );
}
