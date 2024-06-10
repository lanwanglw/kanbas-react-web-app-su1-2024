import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const createAssignment = async (courseId, moduleId, assignment) => {
    try {
        const response = await axios.post(`${COURSES_API}/${courseId}/modules/${moduleId}/assignments`, assignment);
        return response.data;
    } catch (error) {
        console.error("Error creating assignment:", error);
        throw error;
    }
};

export const findAssignmentsForCourse = async (courseId) => {
    try {
        const response = await axios.get(`${COURSES_API}/${courseId}/modules/assignments`);
        return response.data;
    } catch (error) {
        console.error("Error fetching assignments:", error);
        throw error;
    }
};

export const deleteAssignment = async (courseId, assignmentId) => {
    try {
        await axios.delete(`${COURSES_API}/${courseId}/modules/assignments/${assignmentId}`);
    } catch (error) {
        console.error("Error deleting assignment:", error);
        throw error;
    }
};

export const updateAssignment = async (assignment) => {
    try {
        const response = await axios.put(`${COURSES_API}/modules/assignments/${assignment._id}`, assignment);
        return response.data;
    } catch (error) {
        console.error("Error updating assignment:", error);
        throw error;
    }
};
