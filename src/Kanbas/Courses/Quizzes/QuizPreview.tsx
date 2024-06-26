import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import quizData from '../../Database/quizData.json';

const QuizPreview: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();
    const [quiz] = useState(quizData);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [score, setScore] = useState<number | null>(null);

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = () => {
        let calculatedScore = 0;
        quiz.questions.forEach(question => {
            if (answers[question.id] === question.correctAnswer) {
                calculatedScore += question.points;
            }
        });
        setScore(calculatedScore);
    };

    return (
        <div className="container mt-4">
            <h3>{quiz.title}</h3>
            <div className="alert alert-warning mt-2" role="alert">
                This is a preview of the published version of the quiz
            </div>
            <p>{quiz.description}</p>
            {quiz.questions.map((question) => (
                <div key={question.id} className="mb-3">
                    <h5>{question.title}</h5>
                    <p>{question.text}</p>
                    {question.type === 'Multiple choice' && question.choices && (
                        <div>
                            {question.choices.map((choice, index) => (
                                <div className="form-check" key={index}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name={`question-${question.id}`}
                                        id={`question-${question.id}-choice-${index}`}
                                        value={choice}
                                        checked={answers[question.id] === choice}
                                        onChange={() => handleAnswerChange(question.id, choice)}
                                    />
                                    <label className="form-check-label"
                                           htmlFor={`question-${question.id}-choice-${index}`}>
                                        {choice}
                                    </label>
                                </div>
                            ))}
                        </div>
                    )}
                    {question.type === 'True/false' && (
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question-${question.id}`}
                                    id={`question-${question.id}-true`}
                                    value="true"
                                    checked={answers[question.id] === 'true'}
                                    onChange={() => handleAnswerChange(question.id, 'true')}
                                />
                                <label className="form-check-label"
                                       htmlFor={`question-${question.id}-true`}>True</label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`question-${question.id}`}
                                    id={`question-${question.id}-false`}
                                    value="false"
                                    checked={answers[question.id] === 'false'}
                                    onChange={() => handleAnswerChange(question.id, 'false')}
                                />
                                <label className="form-check-label"
                                       htmlFor={`question-${question.id}-false`}>False</label>
                            </div>
                        </div>
                    )}
                    {question.type === 'Fill in the blank' && (
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                value={answers[question.id] || ''}
                                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-primary" onClick={handleSubmit}>
                    Submit Quiz
                </button>
                <button
                    className="btn btn-secondary"
                    onClick={() => navigate(`/Kanbas/Courses/${quiz.id}/Quizzes/${quizId}/QuizQuestionsEditor`)}
                >
                    Keep Editing This Quiz
                </button>
            </div>
            {score !== null && (
                <div className="alert alert-info mt-4">
                    <h4>Your Score: {score}</h4>
                </div>
            )}
        </div>
    );
};

export default QuizPreview;
