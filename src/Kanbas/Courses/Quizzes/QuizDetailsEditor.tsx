import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { Quiz } from '../../../types';
import { editQuiz } from './reducer';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

interface QuizDetailsEditorProps {
    quizId: string;
    onSave: (quiz: Quiz) => void;
    onSaveAndPublish: (quiz: Quiz) => void;
}

const QuizDetailsEditor: React.FC<QuizDetailsEditorProps> = ({ quizId, onSave, onSaveAndPublish }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const quiz = useSelector((state: RootState) =>
        state.quizzesReducer.quizzes.find((q: Quiz) => q.id === Number(quizId))
    );

    const [quizDetails, setQuizDetails] = useState<Quiz | null>(null);

    useEffect(() => {
        if (quiz) {
            setQuizDetails({ ...quiz });
        }
    }, [quiz]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement; // Type assertion for checkbox
            setQuizDetails(prevDetails => prevDetails ? { ...prevDetails, [name]: checked } : null);
        } else {
            setQuizDetails(prevDetails => prevDetails ? { ...prevDetails, [name]: value } : null);
        }
    };

    const handleSave = () => {
        if (quizDetails) {
            dispatch(editQuiz(quizDetails));
            navigate(-1);
        }
    };

    const handleSaveAndPublish = () => {
        if (quizDetails) {
            onSaveAndPublish(quizDetails);
        }
    };

    const handleCancel = () => {
        navigate(`/Kanbas/Courses/${quizId}/Quizzes`);
    };

    if (!quizDetails) return <div>Loading...</div>;

    return (
        <div className="quiz-details-editor container mt-4">
            <div className="mt-3">
                <div className="mb-3">
                    <input
                        type="text"
                        name="title"
                        value={quizDetails.title}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quiz Instructions</label>
                    <div className="form-control" style={{ minHeight: '100px' }}>
                        <textarea
                            name="description"
                            value={quizDetails.description}
                            onChange={handleChange}
                            className="form-control border-0"
                            rows={4}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Quiz Type</label>
                    <select
                        name="quizType"
                        value={quizDetails.quizType}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="Graded Quiz">Graded Quiz</option>
                        <option value="Practice Quiz">Practice Quiz</option>
                        <option value="Graded Survey">Graded Survey</option>
                        <option value="Ungraded Survey">Ungraded Survey</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Assignment Group</label>
                    <select
                        name="assignmentGroup"
                        value={quizDetails.assignmentGroup}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="Quizzes">Quizzes</option>
                        <option value="Exams">Exams</option>
                        <option value="Assignments">Assignments</option>
                        <option value="Project">Project</option>
                    </select>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="shuffleAnswers"
                        checked={quizDetails.shuffleAnswers}
                        onChange={handleChange}
                        className="form-check-input"
                        id="shuffleAnswers"
                    />
                    <label className="form-check-label" htmlFor="shuffleAnswers">Shuffle Answers</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Time Limit (minutes)</label>
                    <input
                        type="number"
                        name="timeLimit"
                        value={quizDetails.timeLimit}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="multipleAttempts"
                        checked={quizDetails.multipleAttempts}
                        onChange={handleChange}
                        className="form-check-input"
                        id="multipleAttempts"
                    />
                    <label className="form-check-label" htmlFor="multipleAttempts">Multiple Attempts</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Show Correct Answers</label>
                    <select
                        name="showCorrectAnswers"
                        value={quizDetails.showCorrectAnswers}
                        onChange={handleChange}
                        className="form-control"
                    >
                        <option value="Never">Never</option>
                        <option value="After Each Attempt">After Each Attempt</option>
                        <option value="After Due Date">After Due Date</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Access Code</label>
                    <input
                        type="text"
                        name="accessCode"
                        value={quizDetails.accessCode}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="oneQuestionAtATime"
                        checked={quizDetails.oneQuestionAtATime}
                        onChange={handleChange}
                        className="form-check-input"
                        id="oneQuestionAtATime"
                    />
                    <label className="form-check-label" htmlFor="oneQuestionAtATime">One Question at a Time</label>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="webcamRequired"
                        checked={quizDetails.webcamRequired}
                        onChange={handleChange}
                        className="form-check-input"
                        id="webcamRequired"
                    />
                    <label className="form-check-label" htmlFor="webcamRequired">Webcam Required</label>
                </div>
                <div className="form-check mb-3">
                    <input
                        type="checkbox"
                        name="lockQuestionsAfterAnswering"
                        checked={quizDetails.lockQuestionsAfterAnswering}
                        onChange={handleChange}
                        className="form-check-input"
                        id="lockQuestionsAfterAnswering"
                    />
                    <label className="form-check-label" htmlFor="lockQuestionsAfterAnswering">Lock Questions After Answering</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={quizDetails.dueDate}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Available Date</label>
                    <input
                        type="date"
                        name="availableDate"
                        value={quizDetails.availableDate}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Until Date</label>
                    <input
                        type="date"
                        name="untilDate"
                        value={quizDetails.untilDate}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="mt-3">
                    <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
                    <button className="btn btn-primary me-2" onClick={handleSave}>Save</button>
                    <button className="btn btn-success" onClick={handleSaveAndPublish}>Save and Publish</button>
                </div>
            </div>
        </div>
    );
};

export default QuizDetailsEditor;
