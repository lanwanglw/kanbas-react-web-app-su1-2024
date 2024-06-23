import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Quiz } from '../../../types';

export default function QuizDetails() {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();

    const quiz = useSelector((state: RootState) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q.id === Number(quizId))
    );

    if (!quiz) {
        return <div>Quiz not found</div>;
    }

    const handleEdit = () => {
        navigate(`/Kanbas/Courses/Quizzes/${quizId}/edit`);
    };

    const handlePreview = () => {
        navigate(`/Kanbas/Courses/Quizzes/${quizId}/preview`);
    };

    return (
        <div className="quiz-details container mt-4">
            <h2>{quiz.title}</h2>
            <p>Type: {quiz.quizType || 'Graded Quiz'}</p>
            <p>Points: {quiz.points}</p>
            <p>Assignment Group: {quiz.assignmentGroup || 'Quizzes'}</p>
            <p>Shuffle Answers: {quiz.shuffleAnswers ? 'Yes' : 'No'}</p>
            <p>Time Limit: {quiz.timeLimit || '20 Minutes'}</p>
            <p>Multiple Attempts: {quiz.multipleAttempts ? 'Yes' : 'No'}</p>
            {quiz.multipleAttempts && <p>How Many Attempts: {quiz.attempts || '1'}</p>}
            <p>Show Correct Answers: {quiz.showCorrectAnswers}</p>
            <p>Access Code: {quiz.accessCode || 'None'}</p>
            <p>One Question at a Time: {quiz.oneQuestionAtATime ? 'Yes' : 'No'}</p>
            <p>Webcam Required: {quiz.webcamRequired ? 'Yes' : 'No'}</p>
            <p>Lock Questions After Answering: {quiz.lockQuestionsAfterAnswering ? 'Yes' : 'No'}</p>
            <p>Due Date: {quiz.dueDate}</p>
            <p>Available Date: {quiz.availableDate}</p>
            <p>Until Date: {quiz.untilDate}</p>

            <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary me-2" onClick={handlePreview}>Preview</button>
                <button className="btn btn-secondary" onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
}

// Ensure that TypeScript treats the file as a module
export {};