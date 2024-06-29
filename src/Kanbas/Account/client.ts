import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error("Signin error response: ", error.response);
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error("An unexpected error occurred during signin.");
            }
        } else {
            throw new Error("An unknown error occurred during signin.");
        }
    }
};

export const profile = async () => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
        return response.data;
    } catch (error: unknown) {
        throw new Error("An unexpected error occurred while fetching profile.");
    }
};

export const signup = async (user: any) => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error("An unexpected error occurred during signup.");
            }
        } else {
            throw new Error("An unknown error occurred during signup.");
        }
    }
};

export const signout = async () => {
    try {
        const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
        return response.data;
    } catch (error: unknown) {
        throw new Error("An unexpected error occurred during signout.");
    }
};

export const updateProfile = async (profile: any) => {
    try {
        const response = await axiosWithCredentials.put(`${USERS_API}/${profile._id}`, profile);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response && error.response.data) {
                throw new Error(error.response.data.message);
            } else {
                throw new Error("An unexpected error occurred while updating profile.");
            }
        } else {
            throw new Error("An unknown error occurred while updating profile.");
        }
    }
};