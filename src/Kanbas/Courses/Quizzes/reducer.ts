import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Quiz, Question } from '../../../types';

interface QuizState {
    quizzes: Quiz[];
}

const initialState: QuizState = {
    quizzes: [],
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState,
    reducers: {
        addQuiz: (state, action: PayloadAction<Quiz>) => {
            const newQuiz: Quiz = {
                id: Date.now(),
                title: 'Unnamed Quiz',
                description: '',
                availability: 'Not available until <DATE>',
                dueDate: '',
                points: 0,
                questions: [],
                published: false,
                score: null,
                quizType: 'Graded Quiz',  // Default quiz type
                assignmentGroup: 'Quizzes',  // Default assignment group
                shuffleAnswers: true,
                timeLimit: '20 Minutes',
                multipleAttempts: false,
                attempts: 1,
                showCorrectAnswers: 'After each attempt',  // Default value
                accessCode: '',
                oneQuestionAtATime: true,
                webcamRequired: false,
                lockQuestionsAfterAnswering: false,
                availableDate: '',
                untilDate: '',
            };

            state.quizzes.push(newQuiz);
        },
        deleteQuiz: (state, action: PayloadAction<number>) => {
            state.quizzes = state.quizzes.filter(quiz => quiz.id !== action.payload);
        },
        publishQuiz: (state, action: PayloadAction<number>) => {
            const quiz = state.quizzes.find(quiz => quiz.id === action.payload);
            if (quiz) {
                quiz.published = !quiz.published;
            }
        },
        editQuiz: (state, action: PayloadAction<Quiz>) => {
            const quiz = state.quizzes.find(quiz => quiz.id === action.payload.id);
            if (quiz) {
                Object.assign(quiz, action.payload);
            }
        },
        addQuestion: (state, action: PayloadAction<{ quizId: number, question: Question }>) => {
            const { quizId, question } = action.payload;
            const quiz = state.quizzes.find(quiz => quiz.id === quizId);
            if (quiz) {
                quiz.questions.push(question);
            }
        },
        editQuestion: (state, action: PayloadAction<{ quizId: number, question: Question }>) => {
            const { quizId, question } = action.payload;
            const quiz = state.quizzes.find(quiz => quiz.id === quizId);
            if (quiz) {
                const questionIndex = quiz.questions.findIndex(q => q.id === question.id);
                if (questionIndex > -1) {
                    quiz.questions[questionIndex] = question;
                }
            }
        },
        deleteQuestion: (state, action: PayloadAction<{ quizId: number, questionId: number }>) => {
            const { quizId, questionId } = action.payload;
            const quiz = state.quizzes.find(quiz => quiz.id === quizId);
            if (quiz) {
                quiz.questions = quiz.questions.filter(q => q.id !== questionId);
            }
        },
    },
});

export const { addQuiz, deleteQuiz, publishQuiz, editQuiz, addQuestion, editQuestion, deleteQuestion } = quizzesSlice.actions;

export default quizzesSlice.reducer;
