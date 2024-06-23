import axios from 'axios';
import { Quiz } from './types';

// Function to fetch quiz details
export const fetchQuiz = async (quizId: number): Promise<Quiz> => {
    const response = await axios.get(`/api/quizzes/${quizId}`);
    return response.data;
};

// Function to submit quiz answers
export const submitQuizAnswers = async (quizId: number, userId: string, answers: { [key: number]: string }): Promise<{ score: number }> => {
    const response = await axios.post(`/api/quizzes/${quizId}/submit`, { userId, answers });
    return response.data;
};
