import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };

    useEffect(() => { fetchProfile(); }, []);

    const dispatch = useDispatch();

    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };

    return (
        <div className="container mt-4">
            <h1>Profile</h1>
            {profile && (
                <div className="mt-4">
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Username"
                            value={profile.username}
                            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Password"
                            value={profile.password}
                            onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="First Name"
                            value={profile.firstName}
                            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Last Name"
                            value={profile.lastName}
                            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Date of Birth"
                            value={profile.dob}
                            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
                            type="date"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            className="form-control"
                            placeholder="Email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <select
                            className="form-control"
                            value={profile.role}
                            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                        >
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                    <button onClick={signout} className="btn btn-danger w-100">
                        Signout
                    </button>
                </div>
            )}
        </div>
    );
}
