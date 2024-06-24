import axios from "axios";

const axiosWithCredentials = axios.create({
    withCredentials: true,
});

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const MODULES_API = `${REMOTE_SERVER}/api/courses/:cid/modules`;
const MODULES_BASE_API = `${REMOTE_SERVER}/api/modules`;

export const createModule = async (courseId: string, module: any) => {
    try {
        const response = await axiosWithCredentials.post(MODULES_API.replace(':cid', courseId), module);
        return response.data;
    } catch (error) {
        console.error("Error creating module", error);
        throw error;
    }
};

export const fetchModulesByCourse = async (courseId: string) => {
    try {
        const response = await axiosWithCredentials.get(MODULES_API.replace(':cid', courseId));
        return response.data;
    } catch (error) {
        console.error("Error fetching modules", error);
        throw error;
    }
};

export const fetchAllModules = async () => {
    try {
        const response = await axiosWithCredentials.get(MODULES_BASE_API);
        return response.data;
    } catch (error) {
        console.error("Error fetching all modules", error);
        throw error;
    }
};

export const updateModule = async (moduleId: string, module: any) => {
    try {
        const response = await axiosWithCredentials.put(
            `${MODULES_BASE_API}/${moduleId}`,
            module
        );
        return response.data;
    } catch (error) {
        console.error("Error updating module", error);
        throw error;
    }
};

export const deleteModule = async (moduleId: string) => {
    try {
        const response = await axiosWithCredentials.delete(`${MODULES_BASE_API}/${moduleId}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting module", error);
        throw error;
    }
};
