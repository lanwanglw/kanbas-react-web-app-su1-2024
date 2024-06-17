import { useEffect, useState } from "react";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaPencil } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function PeopleDetails({ fetchUsers }: { fetchUsers: () => void }) {
    const { uid, cid } = useParams();
    const [user, setUser] = useState<any>({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [editing, setEditing] = useState(false);
    const navigate = useNavigate();

    const fetchUser = async () => {
        if (!uid) return;
        const user = await client.findUserById(uid);
        setUser(user);
        setName(`${user.firstName} ${user.lastName}`);
        setEmail(user.email);
        setRole(user.role);
    };

    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updatedUser = { ...user, firstName, lastName, email, role };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };

    const deleteUser = async () => {
        await client.deleteUser(uid!);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };

    useEffect(() => {
        fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
                <IoCloseSharp className="fs-1" />
            </Link>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <button onClick={deleteUser} className="btn btn-danger float-end">
                Delete
            </button>
            <button
                onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)}
                className="btn btn-secondary float-start float-end me-2"
            >
                Cancel
            </button>
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)} className="float-end fs-5 mt-2" />
                )}
                {editing && (
                    <FaCheck onClick={saveUser} className="float-end fs-5 mt-2 me-2" />
                )}
                {!editing && (
                    <div onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}
                    </div>
                )}
                {user && editing && (
                    <input
                        className="form-control w-50"
                        defaultValue={`${user.firstName} ${user.lastName}`}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}
                    />
                )}
                <b>Roles:</b>
                {!editing && <span>{user.role}</span>}
                {editing && (
                    <select
                        className="form-select w-50"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="STUDENT">Student</option>
                        <option value="TA">TA</option>
                        <option value="FACULTY">Faculty</option>
                    </select>
                )}
                <br />
                <b>Email:</b>
                {!editing && <span>{user.email}</span>}
                {editing && (
                    <input
                        className="form-control w-50"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                saveUser();
                            }
                        }}
                    />
                )}
                <br />
                <b>Login ID:</b> {user.loginId} <br />
                <b>Section:</b> {user.section} <br />
                <b>Total Activity:</b> {user.totalActivity}
            </div>
        </div>
    );
}
