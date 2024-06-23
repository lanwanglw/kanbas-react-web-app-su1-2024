import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Quiz, Question } from '../../../types';
import { fetchQuiz, submitQuizAnswers } from '../../../api';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizPreview: React.FC = () => {
    const { quizId } = useParams<{ quizId: string }>();
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [answers, setAnswers] = useState<{ [key: number]: string }>({});
    const [score, setScore] = useState<number | null>(null);

    useEffect(() => {
        const loadQuiz = async () => {
            if (quizId) {
                const fetchedQuiz = await fetchQuiz(Number(quizId));
                setQuiz(fetchedQuiz);
            }
        };
        loadQuiz();
    }, [quizId]);

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: answer
        }));
    };

    const handleSubmit = async () => {
        if (quiz) {
            const userId = 'facultyId'; // Replace 'facultyId' with the actual userId
            const result = await submitQuizAnswers(quiz.id, userId, answers);
            setScore(result.score);
        }
    };

    if (!quiz) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
            {quiz.questions.map((question: Question) => (
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
                                        disabled={score !== null}
                                    />
                                    <label className="form-check-label" htmlFor={`question-${question.id}-choice-${index}`}>
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
                                    disabled={score !== null}
                                />
                                <label className="form-check-label" htmlFor={`question-${question.id}-true`}>True</label>
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
                                    disabled={score !== null}
                                />
                                <label className="form-check-label" htmlFor={`question-${question.id}-false`}>False</label>
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
                                disabled={score !== null}
                            />
                        </div>
                    )}
                </div>
            ))}
            <div className="d-flex justify-content-between mt-4">
                <button className="btn btn-primary" onClick={handleSubmit} disabled={score !== null}>
                    Submit
                </button>
                <button className="btn btn-secondary" onClick={() => navigate(`/Kanbas/Courses/${quizId}/QuizQuestionsEditor`)}>
                    Edit Quiz
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
