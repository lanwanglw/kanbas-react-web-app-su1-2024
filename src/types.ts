import {Lesson} from "./Kanbas/Courses/Modules";

export interface Assignment {
    _id: string;
    title: string;
    description: string;
    points: number;
    due_date: string;
    available_date: string;
    course: string;
}

export interface AppState {
    assignmentsReducer: {
        assignments: Assignment[];
    };
}

export interface Question {
    id: number;
    title: string;
    text: string;
    type: string;
    points: number;
    choices?: string[];
    correctAnswer?: string | boolean;
    answers?: string[];
    correctAnswerIndex: number;
}

export interface Quiz {
    id: number;
    title: string;
    description: string;
    availability: string;
    dueDate: string;
    points: number;
    questions: Question[];
    published: boolean;
    score: number | null;
    quizType?: string;
    assignmentGroup?: string;
    shuffleAnswers?: boolean;
    timeLimit?: string;
    multipleAttempts?: boolean;
    attempts?: number;
    showCorrectAnswers?: string;
    accessCode?: string;
    oneQuestionAtATime?: boolean;
    webcamRequired?: boolean;
    lockQuestionsAfterAnswering?: boolean;
    availableDate?: string;
    untilDate?: string;
}

export interface QuizAnswer {
    quizId: number;
    userId: string;
    answers: { [key: number]: string };
    score: number;
    submittedAt: Date;
}

export interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    department: string;
    credits: number;
    description: string;
    image: string;
    author?: string;
}

export interface Module {
    editing: any;
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: Lesson[];
}

