import axios from 'axios';

export const fetchQuiz = async (quizId: number) => {
    try {
        const response = await axios.get(`/api/quizzes/${quizId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz:", error);
        throw error;
    }
};

export const submitQuizAnswers = async (quizId: number, userId: string, answers: { [key: number]: string }, attempt: number) => {
    try {
        const response = await axios.post(`/api/quizzes/${quizId}/submit`, { userId, answers, attempt });
        return response.data;
    } catch (error) {
        console.error("Error submitting quiz answers:", error);
        throw error;
    }
};

export const fetchQuizAnswer = async (quizId: number, userId: string) => {
    try {
        const response = await axios.get(`/api/quizzes/${quizId}/answers/${userId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching quiz answer:", error);
        throw error;
    }
};
