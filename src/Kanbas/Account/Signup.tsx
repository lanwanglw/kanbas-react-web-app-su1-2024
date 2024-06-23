import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const signup = async () => {
        try {
            const currentUser = await client.signup(user);
            dispatch(setCurrentUser(currentUser));
            navigate("/Kanbas/Account/Profile");
        } catch (err: unknown) {
            console.error("Signup error: ", err); // Log error
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred.");
            }
        }
    };

    return (
        <div className="signup-container">
            <h1 className="university-title">Northeastern University</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <input
                value={user.username || ""}
                onChange={(e) => setUser({...user, username: e.target.value})}
                className="form-control mb-2 signup-input"
                placeholder="myNortheastern Username"
            />
            <input
                value={user.password || ""}
                onChange={(e) => setUser({...user, password: e.target.value})}
                type="password"
                className="form-control mb-2 signup-input"
                placeholder="myNortheastern Password"
            />
            <input
                value={user.firstName || ""}
                onChange={(e) => setUser({...user, firstName: e.target.value})}
                className="form-control mb-2 signup-input"
                placeholder="First Name"
            />
            <input
                value={user.lastName || ""}
                onChange={(e) => setUser({...user, lastName: e.target.value})}
                className="form-control mb-2 signup-input"
                placeholder="Last Name"
            />
            <input
                value={user.email || ""}
                onChange={(e) => setUser({...user, email: e.target.value})}
                className="form-control mb-2 signup-input"
                placeholder="Email"
            />
            <select
                value={user.role || "STUDENT"}
                onChange={(e) => setUser({...user, role: e.target.value})}
                className="form-control mb-2 signup-input"
            >
                <option value="STUDENT">Student</option>
                <option value="FACULTY">Faculty</option>
            </select>
            <button onClick={signup} className="btn btn-primary mb-2 signup-button"> Log In </button>
            <br/>
            <Link to="/Kanbas/Account/Signin">Sign in</Link>
        </div>
    );
}