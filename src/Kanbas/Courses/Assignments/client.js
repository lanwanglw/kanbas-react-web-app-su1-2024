import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const createAssignment = async (courseId, assignment) => {
    try {
        const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const findAssignmentsForCourse = async (courseId) => {
    try {
        const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteAssignment = async (assignmentId) => {
    try {
        await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    } catch (error) {
        throw error;
    }
};

export const updateAssignment = async (assignment) => {
    try {
        const response = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
        return response.data;
    } catch (error) {
        throw error;
    }
};
